const express = require('express');
const bodyParser = require('body-parser')
const server = express()
const routes = require('./routes')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.use(routes);

module.exports = server