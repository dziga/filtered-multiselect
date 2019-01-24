const db = require('../db');

it ('should insert in memory db', () => {
  const item = {label:'book'};
  db.insert(item)
  const result = db.find(JSON.stringify(item));

  expect(result).toEqual(item)
}) 

it ('should update in memory db', () => {
  const item = {id: 1, label:'book1', checked: false};
  const update = {id: 1, label:'book2', checked: true};
  db.insert(item)
  db.update(update);

  const result = db.find({id:1});

  expect(result.label).toEqual(update.label)
  expect(result.checked).toEqual(update.checked)
}) 