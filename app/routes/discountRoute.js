const router = require('express').Router();
const discountController = require('../controllers/discountController');

router.get('/', discountController.getAlldiscount);

router.post('/create', discountController.creatediscount);

router.delete('/:id', discountController.deletediscount);

router.put('/:id', discountController.updatediscount);


module.exports = router;