import request from 'superagent'

const rootUrl = '/api/v1/ingredients'

export function getIngredients () {
  return request.get(rootUrl)
    .then(res => {
      return res.body
    })
}