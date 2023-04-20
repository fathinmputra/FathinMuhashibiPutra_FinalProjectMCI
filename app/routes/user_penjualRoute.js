const router = require('express').Router();
const user_penjualController = require('../controllers/user_penjualController');

router.get('/', user_penjualController.getAlluser_penjual);

router.post('/create', user_penjualController.createuser_penjual);

router.delete('/:id', user_penjualController.deleteuser_penjual);

router.put('/:id', user_penjualController.updateuser_penjual);


module.exports = router;