const listBrandOptions = require('../views/pages/create-product/brand-options')

const createProductRoute = require('express').Router()

module.exports = createProductRoute.get('/create-product', async (request, response) => {
  const brands = await listBrandOptions()
  
  response.render('pages/create-product/create-product', {
    brands: await brands.data
  })
})