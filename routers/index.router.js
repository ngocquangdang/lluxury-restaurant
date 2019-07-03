const express = require('express')
const index = require('../controllers/index.controller')

var router = express.Router()

router.get('/', index.index)
router.get('/menu', index.menu)
router.get('/about-us', index.about_us)
router.get('/blog', index.blogs)
router.get('/blog/blog-detail', index.blogs_detail)

module.exports = router