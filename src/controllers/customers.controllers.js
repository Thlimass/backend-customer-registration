const Customers = require('../models/customer.model');

module.exports = {
    index(req,res) {
        res.json({message: 'Hello World from Controller Customer'});
    },
   async create(req, res){
       const {primeiro_nome, ultimo_nome, email_cliente, senha_cliente, nascimento, cpf, estado_civil, genero, cor, altura, tipo_sanguineo, massa_muscular} = req.body;

       let data = {};

       let client = Customers.findOne({email_cliente}); //verificar se já existi o email cadastrado.
       //se não existir, cadastra o cliente.
       if(!client) {
           data = {
               primeiro_nome,
               ultimo_nome,
               email_cliente,
               senha_cliente,
               nascimento,
               cpf,
               estado_civil,
               genero,
               cor,
               altura,
               tipo_sanguineo,
               massa_muscular
           };
           client = await Customers.create(data); //salva o cliente.
           return res.status(200).json(client);
       }else{
           return res.status(500).json(client);

       }
    }
}
