const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUser);

router.post('/create', userController.createUser);

router.delete('/:id', userController.deleteUser);

router.put('/:id', userController.updateUser);


module.exports = router;