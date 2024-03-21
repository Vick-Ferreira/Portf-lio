const Projeto = require('../models/projetos');

//criando um projeto para adicionar ao banco
exports.createProjeto = async (req, res) => {
    const { nome, descricao }  = req.body //meu corpo 
    const projetos = { nome, descricao};
    try{
        await Projeto.create(projetos)
        res.status(201).json({messege: 'projeto adicionado com sucesso! Parabéns!!'})
    }catch (error) {
        res.status(500).json({error: error.message});
    }
}
