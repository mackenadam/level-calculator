const express = require('express')
const router = express.Router()

const db = require('../db/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const saltRounds = 5

// ***** Dont forget to set env *******
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret'
}
// ***** Dont forget to set env *******

passport.use(new JwtStrategy(options, (payload, done) => {
  db.getUser(payload.sub.username)
    .then(user => {
      if (user) {
        return done(null, user)
      } else {
        return done(null, false)
      }
    })
    .catch(err => {
      return done(err, false)
    })
}))

router.post('/login', (req, res) => {

})

router.post('/register', (req, res) => {
  let token
  bcrypt.hash(req.body.password, saltRounds)
    .then(hash => {
      const user = {
        username: req.body.username,
        email: req.body.email,
        hash: hash
      }
      console.log('Route 1', user)
      return user
    })
    .then(user => {
      console.log('Route 1.5', user)
      return db.registerUser(user)
        .then(id => {
          // need to set up .ENV and change the secret below to use that
          token = 'Bearer ' + jwt.sign({ sub: user }, "process.env.JWT_SECRET", { expiresIn: '1d' })
          console.log('Route 2', token)
          return db.assignToken(id, token)
        })
    })
    .then(id => {
      console.log('Route 3', id)
      return db.getUser(id)
    })
    .then(user => {
      console.log('Route 4', user)
      const resObject = {
        token: token,
        user: user
      }
      console.log('Route 5', resObject)
      res.json(resObject)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something is kaputt...' })
    })
})

module.exports = router