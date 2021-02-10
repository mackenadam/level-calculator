import request from 'superagent'

const rootUrl = '/api/v1/recipe'

export function getRecipeAPI() {
  return request.get(rootUrl)
    .then(res => {
      return res.body
    })
}

export function addRecipeIngredientAPI(newIngredient) {
  return request.post(rootUrl + '/addToRecipe')
    .send(newIngredient)
    .then(res => {
      return res.body
    })
}

export function removeRecipeIngredientAPI(id) {
  return request.post(rootUrl + '/removeFromRecipe')
    .send({id})
    .then(res => {
      return res.body
    })
}

export function updateRecipeAPI(id, weight) {
  return request.post(rootUrl + '/updateRecipe')
  .send({id: id, weight: weight})
  .then(res => {
    return res.body
  })
}