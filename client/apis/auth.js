import request from 'superagent'

const rootUrl = '/api/v1/auth'

export function loginUserAPI (credentials) {
  return request.post(rootUrl + '/login')
    .send(credentials)
    .then(res => res.body)
}

export function registerUserAPI (credentials) {
  return request.post(rootUrl + '/register')
    .send(credentials)
    .then(res => res.body)
}