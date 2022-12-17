const router = require('express').Router();
const pedidoController = require('../controllers/pedidoController');
const auth = require('../middlewares/auth');

router.post('/api/pedido', auth, pedidoController.createProduto);
router.get('/api/pedido', auth, pedidoController.listAllPedidos);
router.get('/api/pedido/:id', auth, pedidoController.listOnePedido);
router.delete('/api/pedido/:id', auth, pedidoController.deletePedido);

router.get('/api/pedido/download/:id', auth, pedidoController.generatePdf);

module.exports = router;
