require('dotenv').config()

const consumeApi = require('../../../logic/consumeApi')

const products = `
{
  products{
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
    data: JSON.parse(result).data.products.nodes
  }
}

module.exports = listProductsResult