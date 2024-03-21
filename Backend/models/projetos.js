const mongoose = require('mongoose')

const Projeto = mongoose.model('Projeto', {
    nome: String,
    descricao: String,
})

module.exports = Projeto