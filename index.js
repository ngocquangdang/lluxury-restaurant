
const express = require('express')
const morgan = require('morgan');
const index = require('./routers/index.router')
const app = express()
app.set('view engine','pug')
app.set('views', './views')


app.use(morgan('dev'))
app.use(express.static('access'))
app.use(express.static('image'))
app.use(express.static('views'))


app.use('/',index)

app.listen(process.env.PORT || 9999, function () {
  console.log("connect ok")
})
 
