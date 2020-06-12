const express = require('express')
const router = express.Router()
const controllerUser = require('../controllers/users.controller')

router.get('/testData', controllerUser.testdata);
router.get('/listUser', controllerUser.list)


module.exports = router;