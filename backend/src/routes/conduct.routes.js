const express = require('express')
const router = express.Router()
const controllerConduct = require('../controllers/conduct.controller')


router.get('/', controllerConduct.getConduct)
router.get('/editConduct/:identificacion', controllerConduct.editConduct)

router.post('/create',controllerConduct.create)
router.post('/assignVehicle', controllerConduct.assignVehicle)
router.post('/deleteConduct', controllerConduct.deleteConduct)
router.put('/ConductEdit/:identificacion', controllerConduct.ConductEdit)

module.exports = router;