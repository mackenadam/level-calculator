const connection = require('./connection')

function assignToken (id, token, db = connection) {
  return db('users')
    .where('id', id)
    .update('token', token)
    .then(() => id)
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
  getUserByColumn,
  registerUser
}