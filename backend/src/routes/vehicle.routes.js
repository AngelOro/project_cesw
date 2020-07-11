const express = require('express')
const router = express.Router()
const controllerVehicle = require('../controllers/vehicle.controller');
const controller = require('../controllers/vehicle.controller');


router.get('/', controllerVehicle.getVehicles);
router.get('/typeVehicle', controllerVehicle.getTypeVehicle);
router.get('/marcaVehicle', controllerVehicle.getMarcaVehicle);


router.post('/newVehicle', controllerVehicle.insertVehicle);


module.exports = router;