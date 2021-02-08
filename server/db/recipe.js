const connection = require('./connection')

function getRecipe(db = connection) {
  console.log('DB Function')
  return db('recipe')
    .select()
}

module.exports = {
  getRecipe
}