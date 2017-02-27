/*
const express = require('express')
const fs = require('fs')
const { Twitter } = require('twitter-node-client')

const config = JSON.parse(fs.readFileSync('data/twitter_config', 'utf8'))
const twitter = new Twitter(config)


twitter.getUserTimeline({ screen_name: 'xCaru', count: '10'}, error, success);
*/

const express = require('express')
const { Strategy } = require('passport-twitter')
const passport = require('passport')
const { twitterAuth } = require('./data/auth')


const { consumerKey, consumerSecret, callbackURL } = twitterAuth

passport.use(new Strategy({
  consumerKey,
  consumerSecret,
  callbackURL
}, (token, tokenSecret, profile, cb) => {
  return cb(null, profile)
}))

passport.serializeUser((user, cb) => {
  cb(null, user)
})

passport.deserializeUser((obj, cb) => {
  cb(null, obj)
})

const app = express()

app.set('views', `${__dirname}/views`)

app.set('view engine', 'ejs')

app.use(require('express-session')({ secret: 'keyboard lizerd', resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
  res.render('home', { user: req.user })
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/login/twitter', passport.authenticate('twitter'))

app.get('/login/twitter/return', passport.authenticate('twitter', {failureRedirect: '/login'}),
  (req, res) => {
    res.redirect('/')
  }
)

app.listen(3000)
