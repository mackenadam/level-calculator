const connection = require('./connection')

function getIngredients (db = connection) {
  return db('ingredients')
    .select()
}

module.exports = {
  getIngredients
}