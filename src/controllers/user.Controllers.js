import bcrypt from 'bcrypt';
import {v4 as v4uuid} from 'uuid';
import { usersCollection } from "../config/db.js";

export async function signUp (req, res){
    const user = res.locals.user;
    const hashPassWord = bcrypt.hashSync(user.password, 10);

    try{
        await usersCollection.insertOne({...user, password: hashPassWord});
        return res.status(201).send("Usuário criado com sucesso! Faça login!");
    } catch (err) {
        console.log(err)
        return res.status(500).send("Ocorreu um erro, tente novamnete mais tarde")
    }
}