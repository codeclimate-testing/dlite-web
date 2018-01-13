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

  return (
    <div className  = 'unit'>
      <label 
        htmlFor     = { props.identifier }
        className   = { errorName }
      >
        <ErrorIcon errorClass={ errorName } />
        {props.description}
      </label>
      
      <div className= { className }>
        <input
          className = { className }
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
