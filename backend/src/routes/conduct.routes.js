const express = require('express')
const router = express.Router()
const controllerConduct = require('../controllers/conduct.controller')


router.get('/', controllerConduct.getConduct)
router.post('/create',controllerConduct.create)

module.exports = router;