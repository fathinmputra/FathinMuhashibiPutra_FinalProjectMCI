const router = require('express').Router();
const addressController = require('../controllers/addressController');

router.get('/', addressController.getAlladdress);

router.post('/create', addressController.createaddress);

router.delete('/:id', addressController.deleteaddress);

router.put('/:id', addressController.updateaddress);


module.exports = router;