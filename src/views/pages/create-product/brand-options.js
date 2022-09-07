require('dotenv').config()

const consumeApi = require('../../../logic/consumeApi')

const brands = `
{
  brands{
    nodes{
      id
      name
    }
  }
}
`

async function listBrandOptions() {
  const result = await consumeApi(brands)

  return {
    data: JSON.parse(result).data.brands.nodes
  }
}

module.exports = listBrandOptions