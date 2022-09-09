const listProductsResult = require('./list-products.js')

const listProductsRoute = require('express').Router()

module.exports = listProductsRoute.get('/list-products', async (request, response) => {
  const products = await listProductsResult()
  
  response.render('pages/list-products/list-products', {
    products: await products.data,
  })
})