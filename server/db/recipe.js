const connection = require('./connection')

function addToRecipe(newIngredient, db = connection) {
  return db('recipe')
    .insert(newIngredient)
}

function getRecipe(db = connection) {
  return db('recipe')
    .orderBy('name')
    .select()
}

function removeFromRecipe(id, db = connection) {
  return db('recipe')
    .where('id', id)
    .delete()
}

function updateRecipe(id, weight, db = connection) {
  return db('recipe')
    .where({id: id})
    .update({weight: weight})
}

module.exports = {
  addToRecipe,
  getRecipe,
  removeFromRecipe,
  updateRecipe
}