
exports.seed = function(knex) {
  return knex('table_name').del()
    .then(function () {
      return knex('table_name').insert([
        {
          id: 1,
          name: 'Fluffies marshmallows',
          energy: 1453,
          fat: 0,
          carbohydrates: 83.8,
          sugar: 58.2,
          protein: 3.9
        }
      ])
    })
}
