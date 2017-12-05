'use strict';

import React from 'react';

const CheckBoxInput = (props) => {
  return (
    <div className='text-input-block'>
      <div className="input-container">
        <label htmlFor={ props.identifier }>
          <input  type="checkbox"
            id={props.identifier }
            name={ props.identifier }
            onChange={ props.onChange }
            checked={ props.checked }
          />
          {props.description}
        </label>
      </div>
    </div>
  )
};

export default CheckBoxInput;