const Customers = require('../models/customer.model');

module.exports = {
    index(req,res) {
        res.json({message: 'Hello World from Controller Customer'});
    },
   async create(req, res){
       const {primeiroNome,
           ultimoNome,
           emailCliente,
           senhaCliente,
           nascimento,
           cpf,
           estadoCivil,
           genero,
           cor,
           altura,
           tipoSanguineo,
           massaMuscular} = req.body;

       let data = {};

       let client = Customers.findOne({email_cliente}); //verificar se já existi o email cadastrado.
       //se não existir, cadastra o cliente.
       if(!client) {
           data = {
               primeiroNome,
               ultimoNome,
               emailCliente,
               senhaCliente,
               nascimento,
               cpf,
               estadoCivil,
               genero,
               cor,
               altura,
               tipoSanguineo,
               massaMuscular
           };
           client = await Customers.create(data); //salva o cliente.
           return res.status(200).json(client);
       }else{
           return res.status(500).json(client);

       }
    }
}
