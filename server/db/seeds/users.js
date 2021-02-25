
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          username: 'Adam',
          email: 'test@test.com',
          hash: 'test'
        }
      ])
    })
}
