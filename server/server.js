const express = require('express')
const path = require('path')

const ingredientsRoutes = require('./routes/ingredients')
const recipeRoutes = require('./routes/recipe')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/ingredients', ingredientsRoutes)
server.use('/api/v1/recipe', recipeRoutes)

module.exports = server
