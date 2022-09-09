const consumeApi = require('../../../logic/consumeApi.js');

async function createProductAndAddCategory({ name, description, price, brandId, categoryId }) {
  const createOneProduct = `
    mutation {
      createOneProduct(
        input: {
          product: {
            name: "${name}"
            description: "${description}"
            price: ${price}
            brandId: ${brandId}
          }
        }
      ) {
        id
        name
        description
        price
        createdAt
        updatedAt
      }
    }
  `

  const resultProduct = await consumeApi(createOneProduct)
  const product = await JSON.parse(resultProduct).data

  const productId = product?.createOneProduct.id

  const addProductsToCategory = `
    mutation {
      addProductsToCategory(
        input: {
          id: ${categoryId}
          relationIds: [
            "${productId}"
          ]
        }
      )
      {
        id
        name
      }
    }
  `
  const addProductToCategory = await consumeApi(addProductsToCategory)
  const productsToCategory = await JSON.parse(addProductToCategory).data

  const data = {
    ...product,
    category: { ...productsToCategory?.addProductsToCategory }
  }

  return data
}

module.exports = createProductAndAddCategory

