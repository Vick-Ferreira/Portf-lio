const router = require('express').Router()
const Projetos = require('../models/projetos')
const projetosController = require('../controller/projetoController')

//crinado rotas para a API

router.post('/', projetosController.createProjeto);

module.exports = router;