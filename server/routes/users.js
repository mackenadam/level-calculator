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
  // ***** Dont forget to set env *******
  secretOrKey: 'secret'
}
// ***** Dont forget to set env *******

passport.use(new JwtStrategy(options, (payload, done) => {
  db.getExistingUser(payload.sub.username)
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
      return user
    })
    .then(user => {
      db.registerUser(user)
        .then(id => {
          token = 'Bearer ' + jwt.sign({ sub: user }, process.env.JWT_SECRET, { expiresIn: '1d' })
          return db.assignToken(id, token)
        })
    })
})

module.exports = router