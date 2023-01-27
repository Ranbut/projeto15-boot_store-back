import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);

let db;

try{
    await mongoClient.connect()
    db = mongoClient.db();
    console.log("Banco de dados MongoDB conectado!");
}catch(err){
    console.log(`Erro ao conectar ao MongoDB: ${err}`);
};

export const usersCollection = db.collection("users");
export const produtosCollection = db.collection("produtos");
export const sessionCollection = db.collection("session");
