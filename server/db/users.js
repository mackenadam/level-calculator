const connection = require('./connection')

function assignToken (id, token, db = connection) {
  return db('users')
    .update({ token: token })
    .where('id', id)
}

function getExistingUser (username, db = connection) {
  return db('users').select()
    .where('username', username)
    .first()
}

function registerUser (newUser, db = connection) {
  return db('users').insert(newUser)
}

module.exports = {
  assignToken,
  getExistingUser,
  registerUser
}