import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);

let dataBase;

try{
    await mongoClient.connect()
    dataBase = mongoClient.db();
    console.log("Banco de dados MongoDB conectado!");
}catch(err){
    console.log(`Erro ao conectar ao MongoDB: ${err}`);
};