const connection = require('./connection')

function addToRecipe(newIngredient, db = connection) {
  return db('recipe')
    .insert(newIngredient)
}

function getRecipe(db = connection) {
  return db('recipe')
    .select()
}

function updateRecipe(id, weight, db = connection) {
  return db('recipe')
    .where({id: id})
    .update({weight: weight}, ['id', 'weight'])
}

module.exports = {
  addToRecipe,
  getRecipe,
  updateRecipe
}