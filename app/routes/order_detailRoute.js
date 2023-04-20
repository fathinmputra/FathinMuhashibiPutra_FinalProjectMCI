const router = require('express').Router();
const order_detailController = require('../controllers/order_detailController');

router.get('/', order_detailController.getAllorder_detail);

router.post('/create', order_detailController.createorder_detail);

router.delete('/:id', order_detailController.deleteorder_detail);

router.put('/:id', order_detailController.updateorder_detail);


module.exports = router;