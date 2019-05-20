const express = require('express')
const index = require('../controllers/index.controller')

var router = express.Router()

router.get('/', index.index)

module.exports = router