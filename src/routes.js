const express = require('express');

const routes = express.Router();

const Customers = require('./controllers/customers.controller')

routes.get('/', Customers.index);
//Rotas de Clientes
routes.post('/api/customers',Customers.create);
routes.get('/api/customers',Customers.index); //lista clientes
routes.get('/api/customers.details/:_id',Customers.details); //exibir cliente


module.exports = routes;
