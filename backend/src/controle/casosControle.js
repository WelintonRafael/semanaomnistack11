const conexao = require('../database/conexao');



module.exports = {

async index(request ,response){
 const {page= 1} = request.query;
 const [count] = await conexao('casos').count();
 console.log(count);


const casos = await conexao('casos')

.join('ongs','ongs.id', '=', 'casos.ong_id')
.limit(5)
.offset((page-1)*5)
.select(['casos.*' , 
'ongs.nome',
'ongs.email', 
'ongs.watsap',
'ongs.city',
'ongs.uf'
]);

response.header('X-Total-Count', count['count(*)']);


return response.json(casos);

},

async create(request ,response){

    const { titulo,descricao,valor} = request.body;
    const ong_id = request.headers.authorization;

const [id] = await conexao('casos').insert({

    titulo,
    descricao,
    valor,
    ong_id,


});
return response.json({id});

},
async delete(request , response){

    const {id} = request.params;
    const ong_id = request.headers.authorization;

    const casos = await conexao('casos')
    .select('ong_id')
    .where('id',id)
    .first();

    if(casos.ong_id!==ong_id){

        return response.status(401).json({error:'Ong não autorizada para deletar!'});
        
    }
    await conexao('casos').where('id', id).delete();
    return response.status(204).send();
    
    
}


};