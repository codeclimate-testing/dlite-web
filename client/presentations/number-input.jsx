'use strict';

import React        from 'react';
import errorClass   from '../helpers/validations/error-class';
import { hasValue } from '../helpers/data/validations';
import {
  ErrorIcon,
  ErrorLabel
} from './validations.jsx';
import ExampleLabel from './example-label.jsx';

const Label = (props) => {
  if (!hasValue(props.description)) { return null; }
  return (
    <label
      htmlFor     = { props.identifier }
      className   = { props.errorName }
    >
      <ErrorIcon errorClass={ props.errorName } />
      {props.description}
    </label>
  )
};
const NumberInput = (props) => {
  let className   = `input-container ${props.identifier}-input`;
  let errorName   = errorClass(props);
  let inputClass  = props.error ? 'error' : errorName ;

  return (
    <div className  = 'unit'>
      <Label
        {...props}
        errorName = { errorName }
      />

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
    </div>
  );
};

export default NumberInput;
