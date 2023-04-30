const router = require('express').Router();
const loginController = require('../controllers/auth/loginController');

router.get('/pembeli', loginController.loginPembeli);
router.get('/penjual', loginController.loginPenjual);

module.exports = router