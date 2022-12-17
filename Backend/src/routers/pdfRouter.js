const router = require('express').Router();
const renderHtml = require('../controllers/pedidoController');
const auth = require('../middlewares/auth');

router.get('/api/relatorio/pedido/pdf/:id', renderHtml.renderHtml);
// router.get('/api/pedido/pdf', auth, renderHtml.generatePdf);

module.exports = router;
