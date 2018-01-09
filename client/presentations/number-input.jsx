'use strict';

import React        from 'react';
import errorClass   from '../helpers/validations/error-class';

const NumberInput = (props) => {
  let className = `input-container ${props.identifier}-input`;
  let errorName = errorClass(props);
  let inputName = `unit size-1-1 ${errorName}`;

  return (
    <div className  = 'unit'>
      <label 
        htmlFor     = {props.identifier}
      >
        {props.description}
      </label>
      
      <div className={className}>
        <input
          className = { inputName }
          type      = 'number'
          id        = {props.identifier}
          name      = {props.identifier}
          onChange  = { props.onChange }
          onBlur    = {props.onBlur }
          onFocus   = {props.onFocus }
          value     = { props.value }
        />
      </div>
    </div>
  );
};

export default NumberInput;
