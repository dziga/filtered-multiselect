const insertMock = jest.fn();
const updateMock = jest.fn();
const findAllMock = jest.fn();
jest.setMock('../db',{
  insert: insertMock,
  update: updateMock,
  findAll: findAllMock
});

const service = require('../products.service')

it('service should populate db from file', () => {
  service.insertFromFile()
  expect(insertMock).toHaveBeenCalledTimes(429)
})

it('service should deliver all files from db', () => {
  const result = [{id:1, label:'book', checked: false}]
  findAllMock.mockImplementation(() => {return result})

  expect(service.getProducts()).toEqual(result)
})

it('service should update specific product', () => {
  const update = {label:'book'}

  service.updateProduct(update);
  
  expect(updateMock).toBeCalledWith(update)
})