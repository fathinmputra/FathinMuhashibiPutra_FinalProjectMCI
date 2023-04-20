const router = require('express').Router();
const payment_detailController = require('../controllers/payment_detailController');

router.get('/', payment_detailController.getAllpayment_detail);

router.post('/create', payment_detailController.createpayment_detail);

router.delete('/:id', payment_detailController.deletepayment_detail);

router.put('/:id', payment_detailController.updatepayment_detail);


module.exports = router;