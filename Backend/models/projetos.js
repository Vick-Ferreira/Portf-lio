const mongoose = require('mongoose');

const Projeto = mongoose.model('Projeto', {
    nome: String,
    descricao: String,
    src: String
});

module.exports = Projeto