const express = require('express')

const db = require('../db/ingredients')

const router = express.Router()

router.get('/', (req, res) => {
  db.getIngredients()
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      res.status(500).json({ message: 'Sorry, something is kaputt...' })
    })
})

router.post('/addIngredient', (req, res) => {
  const newIngredient = req.body
  db.addIngredient(newIngredient)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(500).json({ message: 'Sorry, something is kaputt...' })
    })
})

router.post('/deleteIngredient', (req, res) => {
  const id = req.body.id
  db.deleteIngredient(id)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(500).json({ message: 'Sorry, something is kaputt...' })
    })
})

router.post('/updateIngredient', (req, res) => {
  const id = req.body.id
  const ingredient = req.body.ingredient
  db.updateIngredient(id, ingredient)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(500).json({ message: 'Sorry, something is kaputt...' })
    })
})

module.exports = router