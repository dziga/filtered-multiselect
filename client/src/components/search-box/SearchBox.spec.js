import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

test('shearch box should render', () => {
  const component = renderer.create(
    <SearchBox />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

test('search box should return search term', () => {
  const onSearch = jest.fn()
  const component = shallow((<SearchBox onSearch={onSearch}/>))
  const search = 'book';

  component.find('input').simulate('change', { target: { value: search } })
  expect(onSearch.mock.calls[0][0]).toEqual(search);
})
