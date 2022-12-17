const router = require('express').Router();
const pipedrive = require('../controllers/pipedriveController');
const auth = require('../middlewares/auth');

router.get('/api/pipedrive/:deal', auth, pipedrive.getPipedrive);

module.exports = router;
