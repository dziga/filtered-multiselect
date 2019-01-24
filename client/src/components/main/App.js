import React, { Component } from 'react';
import FilterItems from '../filter-items/FilterItems';
import SearchBox from '../search-box/SearchBox';
import Button from '../button/Button';
import {getItems} from '../../services/apiService'

import './App.scss';

class App extends Component {

  constructor() {
    super()
    this.state = {items: [], search:''}
    this.onSearch = this.onSearch.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  async componentWillMount() {
    const items = await getItems()
    this.setState({items})
  }

  render() {
    return (
      <div className={'wrapper'}>
        <div className={'main'}>
          <h3>Productgroep</h3>
          <SearchBox onSearch={this.onSearch} />
          <FilterItems items={this.state.items} search={this.state.search}/>
          <Button onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }

  onSearch(search) {
    this.setState({search})
  }

  onSubmit() {
    this.state.items.filter(item => item.checked).map(item => console.log(item.label))
  }
}

export default App;
