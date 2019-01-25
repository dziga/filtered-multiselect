import React, { Component } from 'react';
import FilterItem from '../filter-item/FilterItem'
import { filter, sort } from './FilterItemsUtils'
import { saveSelected } from '../../services/apiService'
import './FilterItems.scss'

class FilterItems extends Component {
  constructor(props) {
    super(props)
    this.state = {items: props.items}
    this.onItemSelected = this.onItemSelected.bind(this)
  }

  componentWillReceiveProps(props) {
    this.setState({items: props.items})
  }

  render() {
    return (
      <div className="items">
        {this.getFilteredAndSortedItems()}
      </div>
    )
  }

  getFilteredAndSortedItems() {
    const {items} = this.state
    const {search} = this.props
    return sort(filter(items, search)).map((item, key) => {
      return <FilterItem key={key} item={item} onItemSelected={this.onItemSelected} />
    })
  }

  onItemSelected(item) {
    item.checked = !item.checked
    this.setState({items: sort(this.state.items)})
    saveSelected(item)
  }
}

export default FilterItems;
