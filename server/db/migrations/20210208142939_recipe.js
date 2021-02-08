
exports.up = function(knex) {
  return knex.schema.createTable('recipe', table => {
    table.increments('id')
    table.string('name')
    table.float('energy', 1)
    table.float('fat', 1)
    table.float('carbohydrates', 1)
    table.float('sugar', 1)
    table.float('protein', 1)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('recipe')
}
