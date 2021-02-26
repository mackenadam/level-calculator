
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('username')
    table.string('email')
    table.text('hash')
    table.text('token')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users')
}
