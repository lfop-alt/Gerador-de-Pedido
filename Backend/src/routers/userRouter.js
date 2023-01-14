const router = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

router.get('/api/user', auth, userController.listUsers);
router.post('/api/user', userController.createUser);

module.exports = router;
