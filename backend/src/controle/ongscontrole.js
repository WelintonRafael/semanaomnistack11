
const conexao = require('../database/conexao');
const crypto = require('crypto');

module.exports ={
    async index(request ,response){
        const ongs = await conexao('ongs').select('*');

             return response.json(ongs);
            },
   
    async create(request, response) {
        const{ nome, email , watsap, city, uf} = request.body;
  
        const id  = crypto.randomBytes(4).toString('HEX');
    
        await conexao('ongs').insert({
         id,
         nome,
         email,
         watsap,
         city,
         uf,   
        })
        return response.json({id});
    
    }




}