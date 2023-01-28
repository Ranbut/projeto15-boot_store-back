import { produtosCollection } from '../config/db.js';

export async function getProdutos (req, res){
    const productName = req.query.name;
    const productType = req.query.type;

    let listaProdutos;

    if(!productType && !productName) //Se não colocar tipo ou nome
        listaProdutos = await produtosCollection.find().toArray(); //Retorne todos
    else if (productType && !productName) //Se colocar tipo sem nome
        listaProdutos = await produtosCollection.find({type: productType}).toArray(); //Retorne todos desse tipo
    else if (!productType && productName) //Se colocar nome sem tipo
        listaProdutos = await produtosCollection.find({name: {$regex: productName}}).toArray(); //Retorne todos desse nome
    else if (productType && productName) //Se colocar tipo e nome
        listaProdutos = await produtosCollection.find({type: productType, name: {$regex: productName}}).toArray(); //Retorne todos com esse tipo e nome
        
    try{
        res.send(listaProdutos.reverse());
    }catch(err){
        res.status(500).send(err);
    }
}