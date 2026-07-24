# 📋 Documentação Geral da API - Alpha Escalas

Esta documentação descreve todos os recursos, rotas, corpos de requisição, retornos de sucesso e regras de controle de acesso (permissões) da aplicação.

---

## 🔐 Níveis de Acesso (Middlewares)

* **Livre**: Rota pública, não exige autenticação.
* **Autenticado (User)**: Exige um token JWT válido enviado via cabeçalho `Authorization: Bearer <TOKEN>`.
* **Administrador (Admin)**: Exige que o usuário autenticado possua a propriedade `typeUser` com valor `admin`.

---

## 1. Autenticação (`/auth`)

### ➔ Fazer Login
* **Método**: `POST`
* **Rota**: `/auth/login`
* **Acesso**: Livre
* **Headers**: `Content-Type: application/json`
* **Body (JSON)**:
    ```json
    {
      "email": "lucas@email.com",
      "pass": "123456"
    }
    ```
* **Retorno de Sucesso (200 OK)**:
    ```json
    {
      "accessToken": "eyJhbGciOiJIUzI1NiIsIn...",
      "user": {
        "id": "uuid-do-usuario-logado",
        "name": "Lucas",
        "email": "lucas@email.com",
        "typeUser": "admin"
      }
    }
    ```

---

## 2. Usuários (`/users`)

### ➔ Cadastrar Usuário (Atendente ou Admin)
* **Método**: `POST`
* **Rota**: `/users`
* **Acesso**: Livre
* **Headers**: `Content-Type: application/json`
* **Body (JSON)**:
    ```json
    {
      "name": "Lucas",
      "email": "lucas@email.com",
      "pass": "123456",
      "id_atendente": "1"
    }
    ```
    > 💡 *Nota: O campo id_atendente é opcional e, se fornecido, deve ser um valor único.*
* **Retorno de Sucesso (210 Created)**:
    ```json
    {
      "id": "uuid-gerado-pelo-banco",
      "name": "Lucas",
      "email": "lucas@email.com",
      "id_atendente": "1",
      "typeUser": "atendente"
    }
    ```

### ➔ Listar Usuários (ID e Nome)
* **Método**: `GET`
* **Rota**: `/users`
* **Acesso**: Autenticado (User)
* **Headers**: `Authorization: Bearer <TOKEN>`
* **Retorno de Sucesso (200 OK)**:
    ```json
    [
      {
        "id": "uuid-usuario-1",
        "name": "Lucas"
      },
      {
        "id": "uuid-usuario-2",
        "name": "Gabriel"
      }
    ]
    ```

---

## 3. Plantonistas (`/plantao`)

### ➔ Vincular Usuário como Plantonista
* **Método**: `POST`
* **Rota**: `/plantao`
* **Acesso**: Administrador (Admin)
* **Headers**: `Content-Type: application/json`, `Authorization: Bearer <TOKEN>`
* **Body (JSON)**:
    ```json
    {
      "userId": "uuid-do-usuario-cadastrado"
    }
    ```
* **Retorno de Sucesso (201 Created)**:
    ```json
    {
      "id": "uuid-do-plantonista-criado",
      "nome": "Lucas",
      "userId": "uuid-do-usuario-cadastrado",
      "proxima_data": "2026-07-14T19:43:00.000Z",
      "posicao": 0
    }
    ```
    > 💡 *Nota: O campo posicao define de forma estrita o índice do analista dentro da fila de distribuição sequencial em loop.*

### ➔ Listar Todos os Plantonistas
* **Método**: `GET`
* **Rota**: `/plantao`
* **Acesso**: Autenticado (User)
* **Headers**: `Authorization: Bearer <TOKEN>`
* **Retorno de Sucesso (200 OK)**:
    ```json
    [
      {
        "id": "uuid-do-plantonista",
        "nome": "Lucas",
        "proxima_data": "2026-07-14T19:43:00.000Z",
        "userId": "uuid-do-usuario-cadastrado",
        "posicao": 0
      }
    ]
    ```

### ➔ Buscar Plantonista por ID do Usuário
* **Método**: `GET`
* **Rota**: `/plantao/user/:userId`
* **Acesso**: Administrador (Admin)
* **Headers**: `Authorization: Bearer <TOKEN>`
* **Retorno de Sucesso (200 OK)**:
    ```json
    {
      "id": "uuid-do-plantonista",
      "nome": "Lucas",
      "proxima_data": "2026-07-14T19:43:00.000Z",
      "userId": "uuid-do-usuario-cadastrado",
      "posicao": 0
    }
    ```

---

## 4. Registros de Escalas (`/register`)

### ➔ Geração Automática e Distribuída de Escalas
* **Método**: `POST`
* **Rota**: `/register/gerar`
* **Acesso**: Administrador (Admin)
* **Headers**: `Content-Type: application/json`, `Authorization: Bearer <TOKEN>`
* **Descrição**: Recebe uma data inicial de referência e distribui automaticamente os plantões semanais de forma sequencial em loop entre os analistas ativos, obedecendo à ordem de posição.
* ⚠️ **Regra de Negócio Impeditiva**: Caso o algoritmo tente gerar um lote contendo uma data em que já exista qualquer plantão agendado, a operação é interrompida imediatamente disparando um erro com status `500`.
* **Body (JSON)**:
    ```json
    {
      "dataInicio": "2026-08-01T00:00:00.000Z",
      "diaSemana": 6,
      "horarioInicio": "08:00",
      "horarioFim": "18:00"
    }
    ```
* **Retorno de Sucesso (201 Created)**:
    ```json
    {
      "message": "2 plantões gerados e distribuídos com sucesso!",
      "registros": [
        {
          "id": "uuid-do-registro-1",
          "plantao_id": "uuid-do-plantonista-posicao-0",
          "user_id": "uuid-do-usuario",
          "data": "2026-08-01T00:00:00.000Z",
          "startTime": "2026-08-01T08:00:00.000Z",
          "endTime": "2026-08-01T18:00:00.000Z"
        }
      ]
    }
    ```

### ➔ Criar Novo Registro Manual Individual
* **Método**: `POST`
* **Rota**: `/register`
* **Acesso**: Administrador (Admin)
* **Headers**: `Content-Type: application/json`, `Authorization: Bearer <TOKEN>`
* ⚠️ **Regra de Negócio Impeditiva**: Caso tente agendar um registro manual em um dia (janela UTC de 24h) que já possua qualquer outro plantão ativo, a requisição será abortada retornando status `400 Bad Request`.
* **Body (JSON)**:
    ```json
    {
      "plantao_id": "uuid-do-plantonista",
      "user_id": "uuid-do-usuario",
      "data": "2026-08-20T00:00:00.000Z",
      "startTime": "2026-08-20T08:00:00.000Z",
      "endTime": "2026-08-20T18:00:00.000Z"
    }
    ```
* **Retorno de Sucesso (210 Created)**:
    ```json
    {
      "id": "uuid-do-registro",
      "plantao_id": "uuid-do-plantonista",
      "user_id": "uuid-do-usuario",
      "data": "2026-08-20T00:00:00.000Z",
      "startTime": "2026-08-20T08:00:00.000Z",
      "endTime": "2026-08-20T18:00:00.000Z"
    }
    ```

### ➔ Listar Registros de Escala (Ordenado e Paginado com Limite de 8)
* **Método**: `GET`
* **Rota**: `/register/find?page=1`
* **Acesso**: Autenticado (User)
* **Headers**: `Authorization: Bearer <TOKEN>`
* **Query Params**:
    * `page`: Número da página (opcional, padrão: `1`).
* **Descrição**: Retorna uma paginação contendo até 8 registros ordenados decrescentemente pela data de criação (`createdAt: desc`), garantindo que os lançamentos mais novos fiquem no topo da lista.
* **Retorno de Sucesso (200 OK)**:
    ```json
    {
      "registros": [
        {
          "id": "uuid-do-registro",
          "plantao_id": "uuid-do-plantonista",
          "user_id": "uuid-do-usuario",
          "data": "2026-08-20T00:00:00.000Z",
          "startTime": "2026-08-20T08:00:00.000Z",
          "endTime": "2026-08-20T18:00:00.000Z",
          "plantao": {
            "id": "uuid-do-plantonista",
            "nome": "Lucas"
          },
          "user": {
            "id": "uuid-do-usuario",
            "name": "Gabriel",
            "email": "gabriel@alphasoftware.com.br"
          }
        }
      ],
      "total": 18,
      "pages": 3
    }
    ```

### ➔ 🟢 NOVA: Buscar Registro Específico por ID
* **Método**: `GET`
* **Rota**: `/register/:id`
* **Acesso**: Autenticado (User)
* **Headers**: `Authorization: Bearer <TOKEN>`
* **Retorno de Sucesso (200 OK)**:
    ```json
    {
      "id": "uuid-do-registro",
      "plantao_id": "uuid-do-plantonista",
      "user_id": "uuid-do-usuario",
      "data": "2026-08-20T00:00:00.000Z",
      "startTime": "2026-08-20T08:00:00.000Z",
      "endTime": "2026-08-20T18:00:00.000Z"
    }
    ```
* **Retorno de Erro (404 Not Found)**: Caso o ID não exista no banco.

### ➔ Buscar Próximo Plantão Ativo
* **Método**: `GET`
* **Rota**: `/register/next`
* **Acesso**: Autenticado (User)
* **Headers**: `Authorization: Bearer <TOKEN>`
* **Descrição**: Retorna a escala ativa mais próxima do horário atual do servidor (ignora registros passados).
* **Retorno de Sucesso (200 OK)**:
    ```json
    {
      "id": "uuid-do-registro-ativo",
      "plantao_id": "uuid-do-plantonista",
      "user_id": "uuid-do-usuario-do-plantao",
      "data": "2026-07-15T00:00:00.000Z",
      "startTime": "2026-07-15T07:00:00.000Z",
      "endTime": "2026-07-15T12:00:00.000Z",
      "user": {
        "id": "uuid-do-usuario-do-plantao",
        "name": "Kariny"
      },
      "plantao": {
        "id": "uuid-do-plantonista",
        "nome": "Lucas"
      }
    }
    ```

### ➔ Transferir Plantão (Alterar o Usuário do Registro)
* **Método**: `PATCH`
* **Rota**: `/register/change-user/:id`
* **Acesso**: Administrador (Admin)
* **Headers**: `Content-Type: application/json`, `Authorization: Bearer <TOKEN>`
* **Body (JSON)**:
    ```json
    {
      "newUserId": "uuid-do-novo-usuario-que-assumira"
    }
    ```
* **Retorno de Sucesso (200 OK)**:
    ```json
    {
      "id": "uuid-do-registro-alterado",
      "plantao_id": "uuid-do-plantonista",
      "user_id": "uuid-do-novo-usuario-que-assumira",
      "data": "2026-08-20T00:00:00.000Z",
      "startTime": "2026-08-20T08:00:00.000Z",
      "endTime": "2026-08-20T18:00:00.000Z"
    }
    ```

### ➔ Atualizar Datas/Horários de um Registro
* **Método**: `PUT`
* **Rota**: `/register/:id`
* **Acesso**: Administrador (Admin)
* **Headers**: `Content-Type: application/json`, `Authorization: Bearer <TOKEN>`
* **Body (JSON)**:
    ```json
    {
      "data": "2026-08-21T00:00:00.000Z",
      "startTime": "2026-08-21T08:00:00.000Z",
      "endTime": "2026-08-21T18:00:00.000Z"
    }
    ```
* **Retorno de Sucesso (200 OK)**:
    ```json
    {
      "id": "uuid-do-registro",
      "plantao_id": "uuid-do-plantonista",
      "user_id": "uuid-do-usuario",
      "data": "2026-08-21T00:00:00.000Z",
      "startTime": "2026-08-21T08:00:00.000Z",
      "endTime": "2026-08-21T18:00:00.000Z"
    }
    ```

### ➔ Remover Registro de Escala
* **Método**: `DELETE`
* **Rota**: `/register/:id`
* **Acesso**: Administrador (Admin)
* **Headers**: `Authorization: Bearer <TOKEN>`
* **Retorno de Sucesso (200 OK)**:
    ```json
    {
      "message": "Registro excluído com sucesso."
    }
    ```

---

## 5. 🟢 RECURSO NOVO: Dashboard e Microsserviços (`/dashboard`)

### ➔ Buscar Relatório de Chamados por Usuário
* **Método**: `GET`
* **Rota**: `/dashboard/tickets`
* **Acesso**: Autenticado (User)
* **Headers**: `Authorization: Bearer <TOKEN>`
* **Query Params (Obrigatórios)**:
    * `startDate`: Data de início no formato literal `YYYY-MM-DD` (Ex: `2026-07-15`).
    * `endDate`: Data de término no formato literal `YYYY-MM-DD` (Ex: `2026-07-15`).
* **Descrição**: Endpoint que atua como proxy seguro e autenticado consumindo um microsserviço externo da Alpha Software para coletar estatísticas de atendimento de cada operador.
* **Retorno de Sucesso (200 OK)**:
    ```json
    [
      {
        "email": "tainara@alphasoftware.com.br",
        "name": "Tainara",
        "qtd_em_atendimento": "2",
        "qtd_pendentes": "0",
        "qtd_resolvidos": "66",
        "qtd_por_usuario": "68",
        "tma": {
          "minutes": 18
        },
        "tme": {
          "minutes": 2
        },
        "media_avaliacao": null
      }
    ]
    ```
* **Retorno de Erro (400 Bad Request)**: Caso falte um ou ambos os query params de data na requisição.