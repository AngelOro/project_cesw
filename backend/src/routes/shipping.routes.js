const express = require('express')
const router = express.Router()
const controllerShipping = require('../controllers/shipping.controller')

router.get('/testData', controllerShipping.testdata);
router.get('/listUser', controllerShipping.list)


module.exports = router;