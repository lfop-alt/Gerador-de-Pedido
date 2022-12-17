const router = require('express').Router();
const productPedidoController = require('../controllers/productPedidoController');
const auth = require('../middlewares/auth');

router.get('/api/productpedido/:id', auth, productPedidoController.listOneProductPedido);
router.post('/api/productpedido', auth, productPedidoController.createProductPedido);
router.put('/api/productpedido/:id', auth, productPedidoController.editProductPedido);

module.exports = router;
