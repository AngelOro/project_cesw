const express = require('express')
const router = express.Router()
const controllerVehicle = require('../controllers/vehicle.controller')


router.get('/', controllerVehicle.getVehicles);


module.exports = router;