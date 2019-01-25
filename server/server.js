const express = require('express');
const bodyParser = require('body-parser')
const server = express()
const routes = require('./routes')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

server.use(routes);

module.exports = server