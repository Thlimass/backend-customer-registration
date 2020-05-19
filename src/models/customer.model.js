const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({
    primeiro_nome: String,
    ultimo_nome: String,
    email_cliente:String,
    senha_cliente:String,
    nascimento: Date,
    cpf: String,
    estadoCivil: String,
    genero: String,
    cor: String,
    altura: Number,
    tipoSanguineo: String,
    massaMuscular: Number,
},{
    timestamp:true
});

//function p/ criptografar a senha antes de gravar
DataSchema.pre('save',function(next){
   if(this.isModified("senha_cliente")){
       return next();
   }
   this.senha_cliente = bcrypt.hashSync(this.senha_cliente,10);
});

const customers = mongoose.model('Customers', DataSchema);
module.exports = customers;
