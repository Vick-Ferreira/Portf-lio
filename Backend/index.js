//chamar express, mongoDB
const express = require('express')
const app = express() // precisa do ()
const mongoose = require('mongoose')
require('dotenv').config(); // Carregar variáveis de ambiente do arquivo .env
const path = require('path')
const port = process.env.PORT || 3000 //Heroku

// Configuração do middleware express.json()
//Isso é importante para garantir que o corpo da solicitação seja analisado corretamente antes de ser passado para suas funções de rota.
app.use(express.json());

// Importando os modelos e controladores
const projetoRouter = require('./router/projetoRouter');
app.use('/projeto', projetoRouter)

// Configurar o middleware para servir arquivos estáticos do diretório 'uploads'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//configuração para servir meus arquivos estáticos
const frontendPath = path.join(__dirname,'../Frontend');
app.use(express.static(frontendPath));
app.use(express.urlencoded({extended:true}))//analisa dados das solicitações (extended :indica ao Express para analisar dados codificados em URL usando a biblioteca querystring do Node.js)


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