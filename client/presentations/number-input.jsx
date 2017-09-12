'use strict';

import React from 'react';

const NumberInput = (props) => {
  let className = `input-container ${props.identifier}-input`;

  return (
    <div className='unit'>
      <label htmlFor={props.identifier}>{props.description}</label>
      <div className={className}>
        <input
          className='unit size-1-1'
          type='number'
          id={props.identifier}
          name={props.identifier}
          onChange={ props.onChange }
          value={ props.value }
        />
      </div>
    </div>
  );
};

export default NumberInput;
