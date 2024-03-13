//chamar express, mongoDB
const express = require('express')
const app = express() // precisa do ()
const mongoose = require('mongoose')
require('dotenv').config(); // Carregar variáveis de ambiente do arquivo .env
const path = require('path')
const port = process.env.PORT || 3000 //Heroku

//configuração para servir meus arquivos estáticos
const frontendPath = path.join(__dirname,'../Frontend');
app.use(express.static(frontendPath));
app.use(express.urlencoded({extended:true}))//analisa dados das solicitações (extended :indica ao Express para analisar dados codificados em URL usando a biblioteca querystring do Node.js)
app.use(express.json())//ler respostar json

//metodo teste
app.get('/', (req, res) => {
    res.json({message:'Olá Vitoria, seu back está rodando porra!'})
})

// Configurar a conexão com o MongoDB
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Conexão com MongoDB estabelecida com sucesso!");
});

// Restante do seu código, como definição de rotas, configuração do servidor, etc.
app.listen(port, () => {
    console.log(`Servidor está rodando na porta: ${port}`);
});