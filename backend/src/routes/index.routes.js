const express = require('express')
const router = express.Router()
const controllerVehicle = require('../controllers/vehicle.controller')
const controllerUser = require('../controllers/users.controller')
const controllerShipping = require('../controllers/shipping.controller')

router.get('/', controllerVehicle.getVehicles);
router.get('/', controllerShipping.getShipping);
router.get('/testData', controllerUser.testdata);
router.get('/listUser', controllerUser.list)
router.get('/testData', controllerShipping.testdata);
router.get('/listUser', controllerShipping.list)

// router.get('/', (req, res) => {
//     res.json({status: "Listando Vehiculos"})
// })



module.exports = router;