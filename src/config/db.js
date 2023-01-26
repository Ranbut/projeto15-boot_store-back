import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);

try{
    await mongoClient.connect()
    console.log("Banco de dados MongoDB conectado!");
}catch(err){
    console.log(`Erro ao conectar ao MongoDB: ${err}`);
};

const db = mongoClient.db();
export const usersCollection = db.collection("users");