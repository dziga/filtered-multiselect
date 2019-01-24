import { filter, sort } from './FilterItemsUtils';

test('filter items based on search criteria and ignore selected items', () => {
  const items = [
    {id:1, checked:false, label:'ninja'},
    {id:2, checked:true, label:'book2'},
    {id:3, checked:false, label:'shelf'},
  ]

  expect(filter(items, 'she')).toEqual([items[1], items[2]])
})

test('filter items should return empty array in case of no match', () => {
  const items = [
    {id:1, checked:false, label:'ninja'}
  ]

  expect(filter(items, 'book')).toEqual([])
})

test('sort should be based on selected item', () => {
  const items = [
    {id:1, checked:false, label:'ninja'},
    {id:2, checked:true, label:'book2'},
    {id:3, checked:false, label:'shelf'},
  ]

  expect(sort(items)).toEqual([items[1], items[0], items[2]])
})