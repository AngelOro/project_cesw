const express = require('express')
const router = express.Router()
const controllerConduct = require('../controllers/conduct.controller')
const controller = require('../controllers/vehicle.controller')


router.get('/', controllerConduct.getConduct)
router.post('/create',controllerConduct.create)

router.post('/assignVehicle', controllerConduct.assignVehicle)


module.exports = router;