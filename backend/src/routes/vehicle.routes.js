const express = require('express')
const router = express.Router()
const controllerVehicle = require('../controllers/vehicle.controller')


router.get('/', controllerVehicle.getVehicles);

// router.get('/', (req, res) => {
//     res.json({status: "Listando Vehiculos"})
// })



module.exports = router;