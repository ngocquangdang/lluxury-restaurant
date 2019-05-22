const express = require('express')
const index = require('../controllers/index.controller')

var router = express.Router()

router.get('/', index.index)
router.get('/menu', index.menu)

module.exports = router