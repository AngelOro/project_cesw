const express = require('express')
const router = express.Router()
const controllerShipping = require('../controllers/shipping.controller')


router.get('/', controllerShipping.getShipping);
//router.post('/create',controllerShipping.postShipping);
router.get('/cityShipping', controllerShipping.getCityShipping);
router.get('/vehicleShipping', controllerShipping.getVehicleShipping);
router.post('/newShipping', controllerShipping.insertShipping);
module.exports = router;