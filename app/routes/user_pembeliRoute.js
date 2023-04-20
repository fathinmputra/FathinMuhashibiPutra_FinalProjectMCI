const router = require('express').Router();
const user_pembeliController = require('../controllers/user_pembeliController');

router.get('/', user_pembeliController.getAlluser_pembeli);

router.post('/create', user_pembeliController.createuser_pembeli);

router.delete('/:id', user_pembeliController.deleteuser_pembeli);

router.put('/:id', user_pembeliController.updateuser_pembeli);


module.exports = router;