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

function updateRecipe(ingredient, db = connection) {
  return db('recipe')
  .update(ingredient)
  .where('id', ingredient.id)
}

module.exports = {
  addToRecipe,
  getRecipe,
  removeFromRecipe,
  updateRecipe
}