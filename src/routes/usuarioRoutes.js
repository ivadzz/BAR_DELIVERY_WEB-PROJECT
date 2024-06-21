const express = require('express');
const router = express.Router();

const usuarioController = require('../controller/usuarioController');
const anotacaoController = require('../controller/anotacaoController');


router.post('/cadastrar_usuario', usuarioController.cadastrarUsuario);
router.get('/api/usuarios', usuarioController.listarUsuarios);
router.get('/criar_conta', usuarioController.criarContaView);
router.get('/remover_usuario/:id', usuarioController.removerUsuario);
router.get('/carrinho', anotacaoController.carrinho);
router.get('/homee', anotacaoController.homee);





module.exports = router;