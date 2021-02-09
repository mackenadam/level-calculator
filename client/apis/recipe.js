import request from 'superagent'

const rootUrl = '/api/v1/recipe'

export function getRecipeAPI() {
  return request.get(rootUrl)
    .then(res => {
      return res.body
    })
}

export function updateRecipeAPI(id, weight) {
  console.log(id, weight)
  return request.get(rootUrl + '/updateRecipe')
  .send({id: id, weight: weight})
  .then(res => {
    return res.body
  })
}