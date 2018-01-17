'use strict';

import React        from 'react';
import errorClass   from '../helpers/validations/error-class';
import {
  ErrorIcon,
  AdditionalLabel
} from './validations.jsx';

const NumberInput = (props) => {
  let className = `input-container ${props.identifier}-input`;
  let errorName = errorClass(props);
  let additionalText  = props.example;

  // if this numberInput is part of a dateInput, then the description should not turn red on error and so the errorName does not get passed to the class
  let labelClass = props.hasOwnProperty('labelClass') ? `${props.labelClass}` : errorName;
  let inputClass = props.hasOwnProperty('error') ? `${props.error}` : errorName ;

  return (
    <div className  = 'unit'>
      <label 
        htmlFor     = { props.identifier }
        className   = { labelClass }
      >
        <ErrorIcon errorClass={ errorName } />
        {props.description}
      </label>
      
      <div className= { className }>
        <input
          className = { inputClass }
          type      = 'number'
          id        = { props.identifier }
          name      = { props.identifier }
          onChange  = { props.onChange }
          onBlur    = { props.onBlur }
          onFocus   = { props.onFocus }
          value     = { props.value }
        />
      </div>
      <AdditionalLabel
        errorMessage={ props.errorMessage }
        errorClass={ errorName }
        additionalText={ additionalText }
      />
    </div>
  );
};

export default NumberInput;
