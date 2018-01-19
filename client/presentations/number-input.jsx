'use strict';

import React        from 'react';
import errorClass   from '../helpers/validations/error-class';
import {
  ErrorIcon,
  ErrorLabel
} from './validations.jsx';
import ExampleLabel from './example-label.jsx';


const NumberInput = (props) => {
  let className   = `input-container ${props.identifier}-input`;
  let errorName   = errorClass(props);
  let inputClass  = props.hasOwnProperty('error') ? `${props.error}` : errorName ;

  return (
    <div className  = 'unit'>
      <label 
        htmlFor     = { props.identifier }
        className   = { errorName }
      >
        <ErrorIcon errorClass={ errorName } />
        {props.description}
      </label>

      <ExampleLabel
        example     = { props.example }
      />
      
      <div className= { className }>
        <input
          className = { inputClass }
          type      = 'number'
          id        = { props.identifier }
          name      = { props.identifier }
          onChange  = { props.onChange }
          onBlur    = { props.onBlurValidate }
          onFocus   = { props.onFocusClearValidation }
          value     = { props.value }
        />
      </div>
      <ErrorLabel
        errorMessage={ props.errorMessage }
        errorClass={ errorName }
      />
    </div>
  );
};

export default NumberInput;
