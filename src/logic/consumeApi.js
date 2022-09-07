const axios = require("axios")
require('dotenv').config()

async function consumeApi(query) {
  const response = await axios('http://localhost:3000/graphql', {
    method: 'POST',
    data: JSON.stringify({ query }),
    headers: {
      'Content-Type': 'application/json',
      'Origin': 'http://localhost:3000'
    }
  })

  return JSON.stringify(response.data)
}

module.exports = consumeApi