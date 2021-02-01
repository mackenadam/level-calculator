const connection = require('./connection')

function getIngredients (db = connection) {
  return db('ingredients')
    .select()
}

function addIngredient (newIngredient, db = connection) {
  return db('ingredients')
    .insert(newIngredient)
}

module.exports = {
  addIngredient,
  getIngredients
}