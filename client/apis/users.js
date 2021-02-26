import request from 'superagent'

const rootUrl = '/api/v1/users'

export function loginUserAPI (user) {
  return request.post(rootUrl + '/login')
    .send(user)
    .then(res => res.body)
}

export function registerUserAPI (newUser) {
  console.log('API dispatch')
  return request.post(rootUrl + '/register')
    .send(newUser)
    .then(res => {
      console.log('API return', res.body)
      return res.body
    })
}