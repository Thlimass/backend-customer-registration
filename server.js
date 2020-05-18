const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;
app.use(cors()); //segurança p/ informar quais dominios estão cosumindo os dados da API.

app.use(cookieParser());

app.use(express.json()); //Usa quando precisa enviar e receber JSON do BACK p/ o FRONT.

app.get('/', function(req,res){
    res.json({message:'Hello World'});
});

//Iniciando o servidor.
app.listen(port,function(){
    console.log(`Server runing on port ${port}`)
});
