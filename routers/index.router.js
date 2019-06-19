const express = require('express')
const index = require('../controllers/index.controller')

var router = express.Router()

router.get('/', index.index)
router.get('/menu', index.menu)
router.get('/about-us', index.about_us)

module.exports = router