const connection = require('./connection')

function getIngredients(db = connection) {
  return db('ingredients')
    .select()
}

function addIngredient(newIngredient, db = connection) {
  return db('ingredients')
    .insert(newIngredient)
}

function deleteIngredient(id, db = connection) {
  return db('ingredients')
    .where('id', id)
    .delete()
}

function updateIngredient(id, db = connection) {
  return db('ingredients')
    .update(ingredient)
    .where('id', id)
}

module.exports = {
  addIngredient,
  deleteIngredient,
  getIngredients,
  updateIngredient
}