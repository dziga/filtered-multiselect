const db = require('./db');

function insertFromFile() {
  const items = require('./items.json')

  items.data.map((label, key) => {
    db.insert({id:key, checked: false, label})
  })
}

function updateProduct(product) {
  db.update(product)
}

function getProducts() {
  return db.findAll().map(item => {
    return {id:item.id, checked: item.checked, label: item.label}
  })
}

module.exports = {
  insertFromFile,
  getProducts,
  updateProduct
}