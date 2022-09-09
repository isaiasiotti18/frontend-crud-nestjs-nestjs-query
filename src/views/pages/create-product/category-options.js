require('dotenv').config()

const consumeApi = require('../../../logic/consumeApi.js')

const categories = `
{
  categories{
    nodes{
      id
      name
    }
  }
}
`

async function listCategoryOptions() {
  const result = await consumeApi(categories)

  return {
    data: JSON.parse(result).data.categories.nodes
  }
}

module.exports = listCategoryOptions