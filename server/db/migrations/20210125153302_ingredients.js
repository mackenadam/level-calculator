exports.up = function(knex) {
  return knex.schema.createTable('ingredients', table => {
    table.increments('id')
    table.string('name')
    table.float('energy', 1)
    table.float('fat', 1)
    table.float('carbohydrates', 1)
    table.float('sugar', 1)
    table.float('protein', 1)
    table.integer('user_id')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('ingredients')
}
