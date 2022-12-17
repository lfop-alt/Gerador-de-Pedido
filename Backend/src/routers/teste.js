const router = require('express').Router();
const pedidoController = require('../integrations/PDF/gerarPdf');

router.get('/test', pedidoController.gerarpdf);

module.exports = router;
