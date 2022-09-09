const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const routes = require('./routes/routes')


const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())

app.use('/', routes)

app.listen(8080, () => {
  console.log('Application started on port 8080')
})