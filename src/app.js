import express from 'express';
import cors from 'cors';
import produtosRoute from './routes/produtos.routes.js';
import authRoute from './routes/authRoutes.js'

const server = express();
server.use(express.json());
server.use(cors());

const PORT = 5000;

//Onde vai ser colocados os routes
server.use([authRoute, produtosRoute]);

server.listen(PORT, () => {
  console.log(`Servidor iniciado na porta: ${PORT}`);
  console.log(`Use: http://localhost:${PORT}`);
});