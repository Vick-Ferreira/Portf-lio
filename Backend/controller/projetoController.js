const fs = require("fs");
const Projeto = require("../models/projetos");

exports.createProjeto = async (req, res) => {
  try {
    const { name, descricao } = req.body;

    const file = req.file;
    const projeto = new Projeto({
      name,
      descricao,
      src: file.path,
    });

    await projeto.save();
    res.json({projeto, msg: "img salva"});
  } catch (err) {
    res.status(500).json({ message: "Erro ao salvar a imagem." });
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