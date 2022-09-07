const express = require('express')
const routes = require('./routes/routes.js')

const path = require('path')

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use('/', routes)

app.listen(8080, () => {
  console.log('Application started on port 8080')
})