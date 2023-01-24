import express from "express";
import cors from "cors";


const server = express();
const PORT = 5000;
server.use(express.json());
server.use(cors());

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})