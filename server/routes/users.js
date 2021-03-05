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
  let token
  db.getUserByColumn('username', req.body.username)
    .then(user => {
      if (user) {
        return bcrypt.compare(req.body.password, user.hash)
        .then(result => {
          if (result) {
            /* Need to init ENV */
            token = 'Bearer ' + jwt.sign({ sub: user }, 'process.env.JWT_SECRET', { expiresIn: '1d' })
            return db.assignToken(user.id, token)
          } else {
            console.log('User not found')
            return res.status(500).json({ message: 'User not found' })
          }
        })
        .then(id => {
          return db.getUserByColumn('id', id)
        })
        .then(user => {
          res.json({token, user})
        })
      }
    })
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
        .then(ids => {
          /******** Need to init .env ********/
          token = 'Bearer ' + jwt.sign({ sub: user }, 'process.env.JWT_SECRET', { expiresIn: '1d' })
          return ids[0]
        })
        .then(id => {
          return db.assignToken(id, token)
        })
        .then(id => {
          return db.getUserByColumn('id', id)
        })
        .then(user => {
          res.json({token, user})
        })
    })
    .catch(err => {
      res.status(500).json({ message: 'Sorry, something is kaputt...' })
    })
})

module.exports = router