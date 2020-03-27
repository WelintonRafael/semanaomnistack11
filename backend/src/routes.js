const express = require('express');
const ongscontrole = require('./controle/ongscontrole');
const casosControle = require('./controle/casosControle');
const perfilcontrole = require('./controle/perfilcontrole');
const sessioncontrole = require('./controle/sessioncontrole');

const conexao = require('./database/conexao');


const routes = express.Router();
routes.post('/sessions', sessioncontrole.create);
routes.get('/ongs', ongscontrole.index);
routes.post('/ongs', ongscontrole.create);

routes.post('/casos',casosControle.create);
routes.get('/casos', casosControle.index);
routes.delete('/casos/:id', casosControle.delete);

routes.get('/perfil', perfilcontrole.index);
    
    module.exports = routes;