const express = require('express')
const router = express.Router()
const controllerShipping = require('../controllers/shipping.controller')


router.get('/', controllerShipping.getShipping);


module.exports = router;