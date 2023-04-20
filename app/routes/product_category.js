const router = require('express').Router();
const product_categoryController = require('../controllers/product_categoryController');

router.get('/', product_categoryController.getAllproduct_category);

router.post('/create', product_categoryController.createproduct_category);

router.delete('/:id', product_categoryController.deleteproduct_category);

router.put('/:id', product_categoryController.updateproduct_category);


module.exports = router;