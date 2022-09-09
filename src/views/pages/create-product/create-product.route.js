const listBrandOptions = require('./brand-options.js')
const listCategoryOptions = require('./category-options.js')
const createProductAndAddCategory = require('./create-product.js')


const createProductRoute = require('express').Router()

createProductRoute.get('/create-product', async (request, response) => {
  const brands = await listBrandOptions()
  const categories = await listCategoryOptions()
  
  response.render('pages/create-product/create-product', {
    brands: await brands.data,
    categories: await categories.data
  })
})

createProductRoute.post('/create-product/graphql', async (request, response) => {
  const data = {
    name: request.body.productName,
    description: request.body.description,
    price: parseFloat(request.body.price),
    brandId: parseInt(request.body.brand),
    categoryId: parseInt(request.body.category)
  }

  await createProductAndAddCategory({...data})

  response.redirect('/products/create-product')
})

module.exports = createProductRoute