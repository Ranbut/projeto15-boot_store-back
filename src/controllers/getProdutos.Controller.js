import { produtosCollection } from '../config/db.js';

export async function getProdutos (req, res){
    const productType = req.headers["type"];
    
    const listaProdutos = await produtosCollection.find({type: productType}).toArray();

    try{
        res.send(listaProdutos.reverse());
    }catch(err){
        res.status(500).send(err);
    }
}