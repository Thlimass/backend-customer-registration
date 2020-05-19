const express = require('express');

const routes = express.Router();

const Customers = require('./controllers/customers.controllers')

routes.get('/',Customers.index);
routes.post('/api/customers',Customers.create);

module.exports = routes;
