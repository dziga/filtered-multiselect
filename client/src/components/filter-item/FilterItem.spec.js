import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import FilterItem from './FilterItem';

test('filter item should render with given props', () => {
  const item = {id:1, checked:true, label:'book'}
  const component = renderer.create(
    <FilterItem item={item} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

test('filter item should return item on click', () => {
  const item = {id:1, checked:false, label:'book'}
  const onItemSelected = jest.fn()
  const component = shallow((<FilterItem item={item} onItemSelected={onItemSelected}/>))

  component.find('input').simulate('change', { target: { checked: true } })

  expect(onItemSelected.mock.calls[0][0]).toEqual(item);
})
