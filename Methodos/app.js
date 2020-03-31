  
//npm install express
//npm install nodemon
//atualizar o packge.json 
//abaixo da linha test, dentro do methodo Script acresentar o comando abaixo
//"Methodos" : "nodemon Methodos/app.js"
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
const hostname = "127.0.0.1";

mongoose.connect('mongodb+srv://Joao:<passs>@cluster0-mhxlq.mongodb.net/Biqueirssa?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(express.json());
app.use(routes);

//Acessar site da Atlas Mongo DB - Criar uma conta e criar um cluster Free 

//imprime no console qua a porta e qual o server que esta rodando aaplicação
app.listen(port, hostname,()=>{
    console.log(`Servidor rodando na porta ${port} em ${hostname}`);
})
