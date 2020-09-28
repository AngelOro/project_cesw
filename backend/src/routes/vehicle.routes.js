const express = require('express')
const router = express.Router()
const controllerVehicle = require('../controllers/vehicle.controller');


router.get('/', controllerVehicle.getVehicles);
router.get('/typeVehicle', controllerVehicle.getTypeVehicle);
router.get('/marcaVehicle', controllerVehicle.getMarcaVehicle);
router.get('/vehicleAvailable', controllerVehicle.getVehicleAvailable);
router.get('/editVehicle/:id_vehiculo',controllerVehicle.editVehicle);

router.post('/newVehicle', controllerVehicle.insertVehicle);
router.post('/deleteVehicle',controllerVehicle.deleteVehicle);
router.put('/vehicleEdit/:id_vehiculo', controllerVehicle.vehicleEdit);

module.exports = router;