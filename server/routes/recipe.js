const express = require('express')

const db = require('../db/recipe')

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

router.post('/addToRecipe', (req, res) => {
  const newIngredient = req.body
  console.log(req.body)
  db.addToRecipe(newIngredient)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Sorry, something is kaputt...'})
    })
})

router.post('/updateRecipe', (req, res) => {
  const id = req.body.id
  const weight = req.body.weight
  console.log(req.body)
  db.updateRecipe(id, weight)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(500).json({ message: 'Sorry, something is kaputt...'})
    })
})

module.exports = router