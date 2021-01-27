const express = require('express')

const db = require('../db/ingredients')

const router = express.Router()

router.get('/', (req, res) => {
  db.getIngredients()
    .then(results => {
      console.log('Route: ', results)
      res.json(results)
    })
    .catch(err => {
      console.log('Route: ', err)
      res.status(500).json({ message: 'Sorry, something is kaputt...'})
    })
})

module.exports = router