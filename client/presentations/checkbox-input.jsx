'use strict';

import React from 'react';

const CheckBoxInput = (props) => {
  return (
    <div className='text-input-block'>
      <div className="input-container">
        <input  type="checkbox"
          id={props.identifier }
          name={ props.identifier }
          onChange={ props.onChange }
        />
        <label htmlFor={ props.identifier }>
          { props.description }
        </label>
      </div>
    </div>
  )
};

export default CheckBoxInput;