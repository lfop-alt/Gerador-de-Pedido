const router = require('express').Router();
const cobrancaController = require('../controllers/cobrancaController');
const auth = require('../middlewares/auth');

router.get('/api/cobranca/:id', auth, cobrancaController.listOneCobranca);
router.post('/api/cobranca', auth, cobrancaController.createCobranca);
router.put('/api/cobranca/:id', auth, cobrancaController.editCobranca);

module.exports = router;