const routes = require('express').Router()
const createProductRoute = require('../views/pages/create-product/create-product.route.js')
const listProductsRoute = require('../views/pages/list-products/list-products.route.js')

routes.get('/home', (request, response) => {
  response.render('pages/home/index')
})

routes.use('/products', [createProductRoute, listProductsRoute])

module.exports = routes