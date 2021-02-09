
exports.seed = function(knex) {
  return knex('recipe').del()
    .then(function () {
      return knex('recipe').insert([
        {
          id: 1,
          name: 'Fluffies marshmallows',
          weight: 0,
          energy: 1453,
          fat: 0,
          carbohydrates: 83.8,
          sugar: 58.2,
          protein: 3.9
        },
        {
          id: 2,
          name: 'Monster Mule',
          weight: 0,
          energy: 187,
          fat: 0,
          carbohydrates: 11,
          sugar: 11,
          protein: 0
        }
      ])
    })
}
