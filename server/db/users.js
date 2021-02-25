const connection = require('./connection')

function assignToken (id, token, db = connection) {
  return db('users')
    .update({ token: token })
    .where('id', id)
}

function getUser (email, db = connection) {
  return db('users').select()
    .where('email', email)
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