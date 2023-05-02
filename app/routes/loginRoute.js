const router = require('express').Router();
const { authenticateToken } = require('../../lib/jwt');
const loginController = require('../controllers/auth/loginController');

router.get('/me', authenticateToken, loginController.me);
router.post('/pembeli', loginController.loginPembeli);
router.post('/penjual', loginController.loginPenjual);

module.exports = router