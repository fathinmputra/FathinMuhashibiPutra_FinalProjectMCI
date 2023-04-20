const router = require('express').Router();
const shopping_sessionController = require('../controllers/shopping_sessionController');

router.get('/', shopping_sessionController.getAllshopping_session);

router.post('/create', shopping_sessionController.createshopping_session);

router.delete('/:id', shopping_sessionController.deleteshopping_session);

router.put('/:id', shopping_sessionController.updateshopping_session);


module.exports = router;