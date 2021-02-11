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
  db.addToRecipe(newIngredient)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(500).json({ message: 'Sorry, something is kaputt...' })
    })
})

router.post('/removeFromRecipe', (req, res) => {
  const id = req.body.id
  db.removeFromRecipe(id)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(500).json({ message: 'Sorry, something is kaputt...' })
    })
})

router.post('/updateRecipe', (req, res) => {
  const ingredient = req.body
  db.updateRecipe(ingredient)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(500).json({ message: 'Sorry, something is kaputt...'})
    })
})

module.exports = router