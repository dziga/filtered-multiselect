import React, { Fragment } from 'react';
import './Button.scss';

function Button (props) {
  const {onSubmit} = props 
  return (
    <Fragment>
      <button className="button" onClick={onSubmit}>Toepassen</button>
    </Fragment>
  );
}

export default Button;
