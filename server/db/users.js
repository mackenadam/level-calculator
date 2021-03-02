const connection = require('./connection')

function assignToken (id, token, db = connection) {
  return db('users')
    .where('id', id)
    .update('token', token)
    .then(() => id)
}

function getUser (id, db = connection) {
  return db('users').select()
    .where('id', id)
    .first()
}

function registerUser (newUser, db = connection) {
  return db('users').insert(newUser)
}

module.exports = {
  assignToken,
  getUser,
  registerUser
}