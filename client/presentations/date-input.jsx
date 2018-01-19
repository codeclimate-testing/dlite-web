'use strict';

import React from 'react';

import errorClass   from '../helpers/validations/error-class';
import { hasValue } from '../helpers/data/validations';
import NumberInput  from './number-input.jsx';
import {
  ErrorIcon,
  ErrorLabel
} from './validations.jsx';

const DateInput = (props) => {
  let errors = {
    month : props.validations.month(),
    day   : props.validations.day(),
    year  : props.validations.year()
  }; 
  let errorMessage = '';

  let generateErrorClass = (string) => {
    return errorClass({
      errorMessage: string
    });
  };

  let errorName = Object.values(errors).reduce((total, error) => {
    if (errorClass({errorMessage: error})) {
      errorMessage = error;
      return total = 'error';
    }
    return total;
  }, '');

  let labelClass = `normal`

  return (
    <div className='date-input'>
      <label 
        htmlFor       = { props.identifier}
        className     = { errorName }
      >
        <ErrorIcon errorClass= {errorName} />
        {props.description}
      </label>

      <NumberInput
        {...props}
        identifier    = 'month'
        example       = 'MM'
        value         = { props.values.month}
        labelClass    = { labelClass }
        error         = { generateErrorClass(errors.month) }
      />
  
      <div className  = 'unit spacer'/>
 
      <NumberInput
        {...props}
        identifier    = 'day'
        example       = 'DD'
        value         = { props.values.day }
        labelClass    = { labelClass }
        error         = { generateErrorClass(errors.day) }
      />

      <div className  = 'unit spacer'/>

      <NumberInput
        {...props}
        identifier    = 'year'
        example       = 'YYYY'
        value         = { props.values.year }
        labelClass    = { labelClass }
        error         = { generateErrorClass(errors.year)  }
      />

      <ErrorLabel 
        errorMessage  = { errorMessage }
        errorClass    = { errorName }
      />
    </div>
  );
};

export default DateInput;
