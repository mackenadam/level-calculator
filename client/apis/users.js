import request from 'superagent'

const rootUrl = '/api/v1/users'

export function loginUserAPI (user) {
  return request.post(rootUrl + '/login')
    .send(user)
    .then(res => res.body)
}

export function registerUserAPI (newUser) {
  return request.post(rootUrl + '/register')
    .send(newUser)
    .then(res => res.body)
}