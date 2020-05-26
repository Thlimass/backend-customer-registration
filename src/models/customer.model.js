const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({
    primeiroNome: String,
    ultimoNome: String,
    emailCliente: String,
    senhaCliente: String,
    nascimento: String,
    cpf: String,
    estadoCivil: String,
    genero: String,
    cor: String,
    altura: Number,
    tipoSanguineo: String,
    massaMuscular: Number,
}, {
    timestamp: true
});

//function p/ criptografar a senha antes de gravar
DataSchema.pre('save', function (next) {
    if (!this.isModified("senhaCliente")) {
        return next();
    }
    this.senhaCliente = bcrypt.hashSync(this.senhaCliente, 10);
    next();
});

DataSchema.pre('findOneAndUpdate', function (next){
    var password = this.getUpdate().senhaCliente+'';
    if(password.length<55){
        this.getUpdate().senhaCliente = bcrypt.hashSync(password,10);
    }
    next();
})

const customers = mongoose.model('Customers', DataSchema);
module.exports = customers;
