
exports.seed = function(knex) {
  return knex('recipe').del()
    .then(function () {
      return knex('recipe').insert({})
    })
}
