const express = require('express')
const router = express.Router()
const controllerShipping = require('../controllers/shipping.controller')


router.get('/', controllerShipping.getShipping);
//router.post('/create',controllerShipping.postShipping);
router.get('/cityShipping', controllerShipping.getCityShipping);
router.get('/vehicleShipping', controllerShipping.getVehicleShipping);
router.get('/editShipping/:id_envio',controllerShipping.editShipping);

router.post('/newShipping', controllerShipping.insertShipping);
router.post('/deleteShipping',controllerShipping.deleteShipping);
router.put('/shippingEdit/:id_envio', controllerShipping.shippingEdit);


module.exports = router;