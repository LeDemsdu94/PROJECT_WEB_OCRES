const express = require('express');
const router = express.Router();

const shopCtrl = require('../controllers/shop');

router.get('/', shopCtrl.getAllShop);
router.post('/', shopCtrl.createThing);
router.get('/:id', shopCtrl.getOneThing);
router.put('/:id', shopCtrl.modifyThing);
router.delete('/:id', shopCtrl.deleteThing);

module.exports = router;