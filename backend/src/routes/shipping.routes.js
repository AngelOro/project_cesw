const express = require('express')
const router = express.Router()
const controllerShipping = require('../controllers/shipping.controller')


router.get('/', controllerShipping.getVehicles);

// router.get('/', (req, res) => {
//     res.json({status: "Listando Vehiculos"})
// })



module.exports = router;