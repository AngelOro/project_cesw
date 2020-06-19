const express = require('express')
const router = express.Router()
const controllerVehicle = require('../controllers/vehicle.controller')
const controllerUser = require('../controllers/users.controller')
const controllerShipping = require('../controllers/shipping.controller')

router.get('/', controllerVehicle.getVehicles);

// router.get('/', (req, res) => {
//     res.json({status: "Listando Vehiculos"})
// })



module.exports = router;