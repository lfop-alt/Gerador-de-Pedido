const router = require('express').Router();
const tokernController = require('../controllers/tokenController');

router.post('/api/login', tokernController.createToken);

module.exports = router;
