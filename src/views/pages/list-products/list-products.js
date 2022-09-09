require('dotenv').config()

const consumeApi = require('../../../logic/consumeApi.js')

const products = `
{
  products(paging: { offset: 1 limit: 20 }){
    nodes{
      id
      name
      price
      brand{
        id
        name
      }
      categories{
        nodes{
          id
          name
        }
      }
    }
  }
}
`

async function listProductsResult() {
  const result = await consumeApi(products)

  return {
    data: JSON.parse(result).data?.products.nodes
  }
}

module.exports = listProductsResult