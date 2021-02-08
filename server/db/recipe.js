const connection = require('./connection')

function getRecipe(db = connection) {
  return db('recipe')
    .select()
}

module.exports = {
  getRecipe
}