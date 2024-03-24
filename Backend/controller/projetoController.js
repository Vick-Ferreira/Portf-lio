const Projeto = require('../models/projeto');

// Função para criar um novo projeto


// Função para adicionar um novo projeto (incluindo vídeo)
exports.createProjeto = async (req, res) => {
    const { nome, descricao, video } = req.body;

    try {
        // Verificar se todos os campos obrigatórios estão presentes
        if (!nome || !descricao || !video) {
            return res.status(400).json({ mensagem: "Nome, descrição e vídeo são obrigatórios." });
        }

        // Criar um novo projeto
        const novoProjeto = new Projeto({
            nome,
            descricao,
            video
        });

        // Salvar o projeto no banco de dados
        await novoProjeto.save();

        // Responder com uma mensagem de sucesso
        res.status(201).json({ mensagem: 'Projeto adicionado com sucesso!', projeto: novoProjeto });
    } catch (error) {
        // Se ocorrer algum erro, responder com uma mensagem de erro
        console.error(error);
        res.status(500).json({ mensagem: 'Erro ao adicionar o projeto.' });
    }
};


exports.buscarProjeto = async (req, res) => {
    try{
        const projeto = await Projeto.find()
        res.status(200).json(projeto)
    }catch(error){
        res.status(500).json({json: error})
    }
}