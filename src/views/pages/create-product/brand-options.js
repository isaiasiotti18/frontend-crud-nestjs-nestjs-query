const consumeApi = require('../../../logic/consumeApi')

async function listBrandOptions() {

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

  const result = await consumeApi(brands)

  return {
    data: JSON.parse(result).data.brands.nodes
  }
}

module.exports = listBrandOptions