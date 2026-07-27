import app, { bootstrap } from "./src/config/server.js";

const PORT = Number(process.env.PORT || '3000');
const HOST = process.env.HOST ?? "0.0.0.0";

app.listen(PORT, HOST, async () => {
  console.log(`Servidor rodando em http://${HOST}:${PORT}`);
  try {
    await bootstrap();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
  } catch (error) {
    console.error("Erro ao inicializar o servidor:", error);
    process.exit(1);
  }
});