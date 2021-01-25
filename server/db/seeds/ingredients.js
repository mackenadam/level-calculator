exports.seed = function(knex) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        {
          id: 1,
          name: 'Bean Supreme Sausages',
          energy: 579,
          fat: 6.6,
          carbohydrates: 4.6,
          sugar: 3.5,
          protein: 12.2
        }
      ]);
    });
};
