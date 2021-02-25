const express = require('express')
const passport = require('passport')
const path = require('path')

const usersRoutes = require('./routes/users')
const ingredientsRoutes = require('./routes/ingredients')
const recipeRoutes = require('./routes/recipe')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use(passport.initialize())
server.use(passport.session())

server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/ingredients', ingredientsRoutes)
server.use('/api/v1/recipe', recipeRoutes)

module.exports = server
