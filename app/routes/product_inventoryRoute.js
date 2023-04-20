const router = require('express').Router();
const product_inventoryController = require('../controllers/product_inventoryController');

router.get('/', product_inventoryController.getAllproduct_inventory);

router.post('/create', product_inventoryController.createproduct_inventory);

router.delete('/:id', product_inventoryController.deleteproduct_inventory);

router.put('/:id', product_inventoryController.updateproduct_inventory);


module.exports = router;