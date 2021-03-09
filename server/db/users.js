const connection = require('./connection')

function assignToken (id, token, db = connection) {
  return db('users')
    .where('id', id)
    .update('token', token)
    .then(() => id)
}

function checkToken(token, db = connection) {
  return db('users')
    .where('token', token)
    .first()
}

function getUserByColumn (column, value, db = connection) {
  return db('users')
    .select()
    .where(column, value)
    .first()
}

function registerUser (newUser, db = connection) {
  return db('users')
    .insert(newUser)
}

module.exports = {
  assignToken,
  checkToken,
  getUserByColumn,
  registerUser
}