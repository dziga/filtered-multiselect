import React, { Fragment } from 'react';
import './SearchBox.scss';

function SearchBox (props) {
  const {onSearch} = props 
  const onInput = (e) => onSearch(e.target.value)
  return (
    <Fragment>
      <input className="search" type="text" placeholder="Zoek op..." onChange={onInput} />
    </Fragment>
  );
}

export default SearchBox;
