const router = require('express').Router();
const cart_itemController = require('../controllers/cart_itemController');

router.get('/', cart_itemController.getAllcart_item);

router.post('/create', cart_itemController.createcart_item);

router.delete('/:id', cart_itemController.deletecart_item);

router.put('/:id', cart_itemController.updatecart_item);


module.exports = router;