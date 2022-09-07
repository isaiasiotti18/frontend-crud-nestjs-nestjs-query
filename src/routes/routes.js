const routes = require('express').Router()
const createProductRoute = require('./create-product.route.js')
const listProductsRoute = require('./list-products.route.js')

routes.get('/home', (request, response) => {
  response.render('pages/index')
})

routes.use('/products', [createProductRoute, listProductsRoute])

module.exports = routes