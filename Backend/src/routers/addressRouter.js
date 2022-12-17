const router = require('express').Router();
const addressController = require('../controllers/addressController');
const auth = require('../middlewares/auth');

router.post('/api/address', auth, addressController.createAddress);
router.put('/api/address/:id', auth, addressController.editAddress);
router.get('/api/address/:id', auth, addressController.listOneAddress);
router.delete('/api/address/:id', auth, addressController.deleteAddress);

module.exports = router;
