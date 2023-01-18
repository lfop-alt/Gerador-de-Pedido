const router = require('express').Router();
const productController = require('../controllers/productController');
const auth = require('../middlewares/auth');

router.get('/api/products', auth, productController.listProduct);
router.get('/api/product/:id', auth, productController.listOneProduct);
router.post('/api/product', auth, productController.createProduct);
router.put('/api/product/:id', auth, productController.editProduct);
router.delete('/api/product/:id', auth, productController.deleteProduct);

module.exports = router;
