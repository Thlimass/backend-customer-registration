const express = require('express');

const routes = express.Router();

const Customers = require('./controllers/customers.controller')

routes.get('/', Customers.index);
//Rotas de Clientes
routes.post('/api/customers',Customers.create);
routes.get('/api/customers',Customers.index); //lista clientes
routes.get('/api/customers.details/:_id',Customers.details); //exibir cliente
routes.delete('/api/customers/:_id',Customers.delete);//deleta cliente
routes.put('/api/customers',Customers.update);//atualiza cliente


module.exports = routes;
