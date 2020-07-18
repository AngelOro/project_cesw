const express = require('express')
const router = express.Router()
const controllerShipping = require('../controllers/shipping.controller')


router.get('/', controllerShipping.getShipping);
//router.post('/create',controllerShipping.postShipping);
module.exports = router;