import request from 'superagent'

const rootUrl = '/api/v1/ingredients'

export function addIngredientAPI(newIngredient) {
  return request.post(rootUrl + '/addIngredient')
    .send(newIngredient)
    .then(res => res.body)
}

export function deleteIngredientAPI(id) {
  return request.post(rootUrl + '/deleteIngredient')
    .send({id})
    .then(res => res.body)
}

export function getIngredientsAPI() {
  return request.get(rootUrl)
  .then(res => res.body)
}

export function updateIngredientAPI(id, ingredient) {
  return request.post(rootUrl + '/updateIngredient')
    .send({id: id, ingredient: ingredient})
    .then(res => res.body)
}