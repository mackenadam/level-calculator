const express = require('express')

const db = require('/../db/recipe')

const router = express.Router()

router.get('/', (req, res) => {
  db.getRecipe()
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      res.status(500).json({ message: 'Sorry, something is kaputt...' })
    })
})

module.exports = router