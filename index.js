const express = require('express')
const fs = require('fs')
const { Twitter } = require('twitter-node-client')

const config = JSON.parse(fs.readFileSync('data/twitter_config', 'utf8'))
console.log(config)
const twitter = new Twitter(config)
