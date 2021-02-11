
exports.up = function(knex) {
  return knex.schema.createTable('recipe', table => {
    table.increments('id')
    table.string('name')
    table.float('weight').defaultTo(0)
    table.float('energy', 1).defaultTo(0)
    table.float('fat', 1).defaultTo(0)
    table.float('carbohydrates', 1).defaultTo(0)
    table.float('sugar', 1).defaultTo(0)
    table.float('protein', 1).defaultTo(0)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('recipe')
}
