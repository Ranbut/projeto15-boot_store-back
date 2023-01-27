import { produtosCollection } from '../config/db.js';

export async function getProdutos (req, res){
    const productType = req.query.type;
    
    let listaProdutos;

    if(!productType)
        listaProdutos = await produtosCollection.find().toArray();
    else
        listaProdutos = await produtosCollection.find({type: productType}).toArray();

    try{
        res.send(listaProdutos.reverse());
    }catch(err){
        res.status(500).send(err);
    }
}