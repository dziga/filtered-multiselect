import React from 'react';
import './FilterItem.scss'

function FilterItem (props) {
    const {item, onItemSelected} = props
    const onClick = () => onItemSelected(item)
    return (
      <div className='item'>
        <label><span dangerouslySetInnerHTML={{__html: item.label}}></span>
          <input type="checkbox" name="checkbox" id={item.id} checked={item.checked} onChange={onClick} />
          <span className='checkmark'></span>
        </label>
        </div>
    );
}

export default FilterItem;
