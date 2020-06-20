const express = require('express')
const router = express.Router()
const controllerConduct = require('../controllers/conduct.controller')


router.get('/', controllerConduct.getConduct)

module.exports = router;