const Customers = require('../models/customer.model');

module.exports = {
    //listagem de clientes
    async index(req, res) {
        const client = await Customers.find();
        res.json(client);
    },
    async create(req, res) {
        console.log(req);
        const {
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
        } = req.body;

        let data = {};

        let client = await Customers.findOne({emailCliente}); //verificar se já existi o email cadastrado.
        //se não existir, cadastra o cliente.
        if (!client) {
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
        } else {
            return res.status(500).json(client);

        }
    },
    //detalha de apenas um cliente
    async details(req, res) {
        const {_id} = req.params;
        const client = await Customers.findOne({_id});
        res.json(client);
    },
    //deleta apenas um cliente
    async delete(req, res) {
        const {_id} = req.params;
        const client = await Customers.findByIdAndDelete({_id});
        return res.json(client);
    },
    async update(req, res) {
        const { _id,primeiroNome, ultimoNome, emailCliente, senhaCliente, nascimento, cpf, estadoCivil, genero, cor, altura, tipoSanguineo, massaMuscular
        } = req.body
        const data = {
            primeiroNome, ultimoNome, emailCliente, senhaCliente, nascimento, cpf, estadoCivil, genero, cor, altura, tipoSanguineo, massaMuscular
        };
        const client = await Customers.findByIdAndUpdate({_id},data,{new:true});
        res.json(client);
    }
}
