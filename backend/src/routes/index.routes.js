const express = require('express')
const router = express.Router()
const controllerVehicle = require('../controllers/vehicle.controller')
const controllerUser = require('../controllers/users.controller')

router.get('/', controllerVehicle.getVehicles);
router.get('/testData', controllerUser.testdata);
router.get('/listUser', controllerUser.list)

// router.get('/', (req, res) => {
//     res.json({status: "Listando Vehiculos"})
// })



module.exports = router;