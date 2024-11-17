const express = require("express");
const cors = require("cors");  // Importando o pacote CORS
const dt_ext1Route = require("./routes/dt-ext1");
const dt_ext2Route = require("./routes/dt-ext2");

const app = express();
const PORT = 3000;

// Habilitando CORS para todas as origens (não recomendado para produção)
app.use(cors());

// Ou se você quiser restringir a um domínio específico (por exemplo, seu frontend em http://localhost:8080)
// app.use(cors({ origin: "http://localhost:8080" }));

// Rotas
app.use("/api/get_soma_concentrado", dt_ext1Route);
app.use("/api/get_soma_materia_prima", dt_ext2Route);

// Inicia servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});