const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({
    primeiro_nome: String,
    ultimo_nome: String,
    email_cliente:String,
    senha_cliente:String,
    nascimento: Date,
    cpf: String,
    estado_civil: String,
    genero: String,
    cor: String,
    altura: Number,
    tipo_sanguineo: String,
    massa_muscular: Number,
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
