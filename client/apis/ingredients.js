import request from 'superagent'

const rootUrl = '/api/v1/ingredients'

export function getIngredientsAPI () {
  return request.get(rootUrl)
    .then(res => {
      return res.body
    })
}

export function addIngredientAPI (newIngredient) {
  return request.post(rootUrl + '/addIngredient')
    .send(newIngredient)
    .then(res => {
      return res.body
    })
}