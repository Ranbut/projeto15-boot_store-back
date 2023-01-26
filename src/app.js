import express from "express";
import cors from "cors";
import authRoute from './routes/authRoutes.js';

const server = express();
const PORT = 5000;
server.use(express.json());
server.use(cors());

//Onde vai ser colocados os routes
server.use([authRoute]);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

export default server;