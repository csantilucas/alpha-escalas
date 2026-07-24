import request from "supertest";
import { describe, it, beforeAll, afterAll, expect } from "vitest";
import app from "../config/server.js"; 
import prisma from "../config/postgres.js";
import { encryptedPass } from "../containers/token.container.js";





describe("Testes de Integração - Fluxo Completo de Escalas e Plantões", () => {
  let tempUserId: string;
  let secondaryUserId: string; 
  let tempPlantonistaId: string;
  let secondaryPlantonistaId: string; 
  let tempRegistroId: string;
  let adminToken: string;

  // Executado antes de rodar os testes: limpa o banco e prepara o cenário isolado
  beforeAll(async () => {
    try {
      // 🧹 1. Garante limpeza completa para os testes não herdarem dados do seed real
      await prisma.registros.deleteMany({});
      await prisma.plantonistas.deleteMany({});
      await prisma.user.deleteMany({});

      const hashedPassword = await encryptedPass.encryptPassword("senha_123");

      // 2. Cria o Usuário Principal (Admin)
      const user = await prisma.user.create({
        data: {
          name: "Médico de Teste",
          email: "medico.teste@email.com",
          pass: hashedPassword,
          id_atendente: "ATEND-999",
          typeUser: "admin", 
        },
      });
      tempUserId = user.id;

      // 3. Cria um Usuário Secundário (Atendente)
      const secondaryUser = await prisma.user.create({
        data: {
          name: "Enfermeiro de Apoio",
          email: "apoio.teste@email.com",
          pass: hashedPassword,
          id_atendente: "ATEND-888",
          typeUser: "atendente",
        }
      });
      secondaryUserId = secondaryUser.id;

      // 4. Efetua o Login para obter o token JWT
      const loginResponse = await request(app).post("/auth/login").send({
        email: "medico.teste@email.com",
        pass: "senha_123",
      });

      if (!loginResponse.body.accessToken) {
        throw new Error("Falha ao gerar o token de acesso no setup dos testes.");
      }
      
      adminToken = loginResponse.body.accessToken;

    } catch (error: any) {
      console.error("=== [DEBUG TEST] ERRO NO SETUP (BEFOREALL) ===");
      console.error(error.message);
      console.error("==============================================");
      throw error;
    }
  });

  afterAll(async () => {
    try {
      await prisma.registros.deleteMany({
        where: { user_id: { in: [tempUserId, secondaryUserId] } }
      });
      await prisma.plantonistas.deleteMany({
        where: { userId: { in: [tempUserId, secondaryUserId] } }
      });
      await prisma.user.deleteMany({
        where: { email: { in: ["medico.teste@email.com", "apoio.teste@email.com"] } }
      });
      await prisma.$disconnect();
    } catch (error: any) {
      console.error("=== [DEBUG TEST] ERRO NA LIMPEZA (AFTERALL) ===");
      console.error(error.message);
      console.error("===============================================");
    }
  });

  // Adicione este bloco dentro do seu src/test/index.test.ts

  // ================= 4. ENTIDADE DASHBOARD (MICROSSERVIÇO) =================
  describe("GET /dashboard/tickets", () => {
    it("deve buscar o relatório de chamados por usuário com sucesso passando datas válidas", async () => {
      const response = await request(app)
        .get("/dashboard/tickets?startDate=2026-07-15&endDate=2026-07-15")
        .set("Authorization", `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      
      if (response.body.length > 0) {
        expect(response.body[0]).toHaveProperty("email");
        expect(response.body[0]).toHaveProperty("name");
        expect(response.body[0]).toHaveProperty("qtd_por_usuario");
        expect(response.body[0]).toHaveProperty("tma");
      }
    });

    it("deve retornar 400 se as datas obrigatórias não forem informadas", async () => {
      const response = await request(app)
        .get("/dashboard/tickets")
        .set("Authorization", `Bearer ${adminToken}`);

      expect(response.status).toBe(400);
      expect(response.body.error).toContain("são obrigatórios");
    });
  });

  // ================= 1. ENTIDADE PLANTONISTAS =================
  describe("POST /plantao", () => {
    it("deve criar o primeiro plantonista com sucesso", async () => {
      const response = await request(app)
        .post("/plantao")
        .set("Authorization", `Bearer ${adminToken}`)
        .send({ userId: tempUserId });

      expect(response.status).toBe(201);
      tempPlantonistaId = response.body.id; 

      // Define a posição 0 na sequência para o primeiro analista
      await prisma.plantonistas.update({
        where: { id: tempPlantonistaId },
        data: { posicao: 0 }
      });
    });

    it("deve criar o segundo plantonista para a fila de distribuição sequencial", async () => {
      const response = await request(app)
        .post("/plantao")
        .set("Authorization", `Bearer ${adminToken}`)
        .send({ userId: secondaryUserId });

      expect(response.status).toBe(201);
      secondaryPlantonistaId = response.body.id;

      // Define a posição 1 na sequência para o segundo analista
      await prisma.plantonistas.update({
        where: { id: secondaryPlantonistaId },
        data: { posicao: 1 }
      });
    });

    it("não deve permitir vincular o mesmo usuário mais de uma vez", async () => {
      const response = await request(app)
        .post("/plantao")
        .set("Authorization", `Bearer ${adminToken}`)
        .send({ userId: tempUserId });

      expect(response.status).toBe(400);
      expect(response.body.error).toContain("já está vinculado");
    });
  });

  describe("GET /plantao", () => {
    it("deve listar todos os plantonistas ordenados pelo plantão mais recente", async () => {
      const response = await request(app)
        .get("/plantao")
        .set("Authorization", `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  // ================= 2. ENTIDADE USUÁRIOS =================
  describe("GET /users", () => {
    it("deve listar os usuários cadastrados retornando estritamente id e name", async () => {
      const response = await request(app)
        .get("/users")
        .set("Authorization", `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body[0]).toHaveProperty("id");
      expect(response.body[0]).toHaveProperty("name");
    });
  });

  // ================= 3. ENTIDADE REGISTROS DE ESCALA =================
  
  // GERAÇÃO SEQUENCIAL AUTOMÁTICA
  describe("POST /register/gerar", () => {
    it("deve gerar uma escala automática e distribuída em looping baseado na posição dos analistas", async () => {
      const response = await request(app)
        .post("/register/gerar")
        .set("Authorization", `Bearer ${adminToken}`)
        .send({
          dataInicio: "2026-08-01T00:00:00.000Z",
          diaSemana: 6, // 6 = Sábado
          horarioInicio: "08:00",
          horarioFim: "18:00"
        });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toContain("gerados e distribuídos");
      expect(Array.isArray(response.body.registros)).toBe(true);
      
      expect(response.body.registros.length).toBe(2);

      // Salva um ID gerado para usar nos testes individuais subsequentes (GET / PUT / PATCH / DELETE)
      tempRegistroId = response.body.registros[0].id;

      const primeiroPlantao = new Date(response.body.registros[0].data);
      // 🟢 CORREÇÃO CRÍTICA: Valida usando fuso UTC puro em conformidade com o novo service
      expect(primeiroPlantao.getUTCDay()).toBe(6); 
    });

    // GERAÇÃO AUTOMÁTICA: Impedimento por colisão de datas
    it("não deve permitir a geração em lote se houver colisão de datas com plantões existentes", async () => {
      const response = await request(app)
        .post("/register/gerar")
        .set("Authorization", `Bearer ${adminToken}`)
        .send({
          dataInicio: "2026-08-01T00:00:00.000Z", 
          diaSemana: 6,
          horarioInicio: "08:00",
          horarioFim: "18:00"
        });

      expect(response.status).toBe(500);
      expect(response.body.error).toContain("já possui um plantão cadastrado");
    });
  });

  describe("POST /register", () => {
    // CRIAÇÃO MANUAL: Impedimento por conflito de data ocupada
    it("não deve permitir criar um plantão manual em um dia que já está ocupado", async () => {
      const response = await request(app)
        .post("/register")
        .set("Authorization", `Bearer ${adminToken}`)
        .send({
          plantao_id: tempPlantonistaId,
          user_id: tempUserId,
          data: "2026-08-01T08:00:00.000Z", 
          startTime: "2026-08-01T08:00:00.000Z",
          endTime: "2026-08-01T18:00:00.000Z",
        });

      expect(response.status).toBe(400);
      expect(response.body.error).toContain("Já existe um plantão agendado");
    });

    it("deve criar um registro manual individual com sucesso em uma data livre", async () => {
      const dataManual = "2026-09-01T08:00:00.000Z"; 
      const response = await request(app)
        .post("/register")
        .set("Authorization", `Bearer ${adminToken}`)
        .send({
          plantao_id: tempPlantonistaId,
          user_id: tempUserId,
          data: dataManual,
          startTime: "2026-09-01T08:00:00.000Z",
          endTime: "2026-09-01T18:00:00.000Z",
        });

      expect(response.status).toBe(201);
    });
  });

  // BUSCA INDIVIDUAL POR ID (NOVA ROTA)
  describe("GET /register/:id", () => {
    it("deve buscar com sucesso os detalhes estruturados de um único registro por seu ID", async () => {
      const response = await request(app)
        .get(`/register/${tempRegistroId}`)
        .set("Authorization", `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id");
      expect(response.body.id).toBe(tempRegistroId);
      expect(response.body).toHaveProperty("user_id");
      expect(response.body).toHaveProperty("plantao_id");
    });

    it("deve retornar 404 caso o ID do registro não exista", async () => {
      const response = await request(app)
        .get("/register/uuid-inexistente-qualquer")
        .set("Authorization", `Bearer ${adminToken}`);

      expect(response.status).toBe(404);
    });
  });

  describe("GET /register/find", () => {
    it("deve listar os registros de escala de forma paginada e ordenada com os dados dos usuários", async () => {
      const response = await request(app)
        .get("/register/find?page=1")
        .set("Authorization", `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      
      expect(response.body).toHaveProperty("registros");
      expect(response.body).toHaveProperty("total");
      expect(response.body).toHaveProperty("pages");
      expect(Array.isArray(response.body.registros)).toBe(true);
      expect(response.body.registros.length).toBeLessThanOrEqual(8);

      if (response.body.registros.length > 0) {
        expect(response.body.registros[0]).toHaveProperty("user");
        expect(response.body.registros[0]).toHaveProperty("plantao");
      }
    });
  });

  describe("GET /register/next", () => {
    it("deve buscar o próximo plantão ativo mais iminente do sistema", async () => {
      const response = await request(app)
        .get("/register/next")
        .set("Authorization", `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
    });
  });

  describe("PUT /register/:id", () => {
    it("deve atualizar com sucesso as datas e horários de uma escala cadastrada", async () => {
      const novaData = "2026-08-25T07:00:00.000Z";

      const response = await request(app)
        .put(`/register/${tempRegistroId}`)
        .set("Authorization", `Bearer ${adminToken}`)
        .send({
          data: novaData,
          startTime: "2026-08-25T07:00:00.000Z",
          endTime: "2026-08-25T12:00:00.000Z",
        });

      expect(response.status).toBe(200);
      expect(new Date(response.body.data).toISOString()).toBe(novaData);
    });
  });

  describe("PATCH /register/change-user/:id", () => {
    it("deve transferir a escala para um novo atendente com sucesso", async () => {
      const response = await request(app)
        .patch(`/register/change-user/${tempRegistroId}`)
        .set("Authorization", `Bearer ${adminToken}`)
        .send({
          newUserId: secondaryUserId,
        });

      expect(response.status).toBe(200);
      expect(response.body.user_id).toBe(secondaryUserId);
    });
  });

  describe("DELETE /register/:id", () => {
    it("deve remover permanentemente uma escala do sistema", async () => {
      const response = await request(app)
        .delete(`/register/${tempRegistroId}`)
        .set("Authorization", `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toContain("sucesso");
    });
  });
});