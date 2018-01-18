'use strict';

import React from 'react';

import { hasValue } from '../helpers/data/validations';
import NumberInput  from './number-input.jsx';
import {
  ErrorIcon,
  ErrorLabel,
  errorMessage,
  errorClass
} from './validations.jsx';

const DateInput = (props) => {
  let errors = {
    month : props.validations.month(),
    day   : props.validations.day(),
    year  : props.validations.year()
  }; 
  let message = errorMessage(errors);
  let addError = errorClass(message);

  return (
    <div className='date-input'>
      <label 
        htmlFor       = { props.identifier}
        className     = { addError }
      >
        <ErrorIcon errorClass= { addError } />
        {props.description}
      </label>

      <NumberInput
        {...props}
        identifier    = 'month'
        example       = 'MM'
        value         = { props.values.month}
        error         = { hasValue(errors.month) }
        onChange      = { props.onChange }
        onBlur        = { props.onBlur }
      />
  
      <div className  = 'unit spacer'/>
 
      <NumberInput
        {...props}
        identifier    = 'day'
        example       = 'DD'
        value         = { props.values.day }
        error         = { hasValue(errors.day) }
        onChange      = { props.onChange }
        onBlur        = { props.onBlur }
      />

      <div className  = 'unit spacer'/>

      <NumberInput
        {...props}
        identifier    = 'year'
        example       = 'YYYY'
        value         = { props.values.year }
        error         = { hasValue(errors.year)  }
        onChange      = { props.onChange }
        onBlur        = { props.onBlur }
      />

      <ErrorLabel 
        errorMessage  = { message }
        errorClass    = { addError }
      />
    </div>
  );
};

export default DateInput;
