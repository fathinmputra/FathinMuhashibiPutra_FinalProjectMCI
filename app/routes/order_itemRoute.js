const router = require('express').Router();
const order_itemController = require('../controllers/order_itemController');

router.get('/', order_itemController.getAllorder_item);

router.post('/create', order_itemController.createorder_item);

router.delete('/:id', order_itemController.deleteorder_item);

router.put('/:id', order_itemController.updateorder_item);


module.exports = router;