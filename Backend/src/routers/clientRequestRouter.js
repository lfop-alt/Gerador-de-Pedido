const router = require('express').Router();
const clientRequestController = require('../controllers/clientRequestControllers');
const auth = require('../middlewares/auth');

router.get('/api/client/:id', auth, clientRequestController.listOneClientRequest);
router.post('/api/client', auth, clientRequestController.createClientRequest);
router.put('/api/client/:id', auth, clientRequestController.editClientRequest);

module.exports = router;
