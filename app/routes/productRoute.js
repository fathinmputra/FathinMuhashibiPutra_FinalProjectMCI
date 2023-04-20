const router = require('express').Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllproduct);

router.post('/create', productController.createproduct);

router.delete('/:id', productController.deleteproduct);

router.put('/:id', productController.updateproduct);


module.exports = router;