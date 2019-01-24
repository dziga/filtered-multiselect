import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import FilterItems from './FilterItems';

test('filter items should render with given props', () => {
  const items = [{id:1, checked:true, label:'book'}]
  const component = renderer.create(
    <FilterItems items={items} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

test('click on item should change checked and put it on top', () => {
  const items = [
    {id:1, checked:false, label:'book1'},
    {id:2, checked:false, label:'book2'},
    {id:3, checked:false, label:'book3'}
  ]
  const component = mount((<FilterItems items={items} />))

  component.find('input').at(1).simulate('change', { target: { checked: true } })

  const checkedElement = component.find('input').at(0).props();

  expect(checkedElement.checked).toBeTruthy()
  expect(checkedElement.id).toEqual(2)
})
