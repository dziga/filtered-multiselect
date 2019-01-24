const loki = require('lokijs');
const db = new loki();

const items = db.addCollection('items')

function insert(item) {
  items.insert(item)
}

function find(query) {
  return items.findOne(query)
}

function update(item) {
  let existing = items.findOne({ id: item.id });
  existing = Object.assign(existing, item)
  items.update(existing);
}

function findAll() {
  return items.find()
}



module.exports = {
  insert,
  find,
  update,
  findAll
}



