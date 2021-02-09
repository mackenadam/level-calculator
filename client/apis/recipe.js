import request from 'superagent'

const rootUrl = '/api/v1/recipe'

export function getRecipeAPI() {
  return request.get(rootUrl)
    .then(res => {
      return res.body
    })
}