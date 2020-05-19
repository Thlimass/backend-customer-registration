const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');


const app = express();
const port = process.env.PORT || 4000;

mongoose.connect('mongodb://localhost:27017/', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('MongoDB CONECTADO com sucesso!')
    }
})

app.use(cors()); //segurança p/ informar quais dominios estão cosumindo os dados da API.
app.use(cookieParser());
app.use(express.json()); //Usa quando precisa enviar e receber JSON do BACK p/ o FRONT.

app.use(routes);

//Iniciando o servidor.
app.listen(port, function () {
    console.log(`Server runing on port ${port}`)
});
