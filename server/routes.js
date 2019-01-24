const express = require('express');
const router = express.Router();
const path = require('path')
const productsService = require('./products.service')

router.use('/static', express.static(path.join(__dirname, '../client/build/static')))
router.get('/', express.static(path.join(__dirname, '../client/build')))

router.get('/products', (req, res) => {
  res.send(productsService.getProducts())
})

router.put('/products', (req, res) => {
  productsService.updateProduct(req.body)
  res.end()
})

router.get('/populate', (req, res) => {
  productsService.insertFromFile()
})

// trigger populate on startup
router.handle({ url: '/populate', method: 'GET' });

module.exports = router;