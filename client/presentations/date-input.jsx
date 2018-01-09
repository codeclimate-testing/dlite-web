'use strict';

import React from 'react';

import errorClass   from '../helpers/validations/error-class';
import { hasValue } from '../helpers/data/validations';
import NumberInput  from './number-input.jsx';
import {
  ErrorIcon,
  AdditionalLabel
} from './validations.jsx';

const DateInput = (props) => {
  let errors = {
    month : props.validations.month(),
    day   : props.validations.day(),
    year  : props.validations.year()
  }; 
  let additionalText  = props.example;
  let errorMessage = '';

  let errorName = Object.values(errors).reduce((total, error) => {
    if (errorClass({errorMessage: error})) {
      errorMessage = error;
      return total = 'error';
    }
    return total;
  }, '');

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
        errorMessage  = { errors.month }
        identifier    = 'month'
        description   = 'MM'
        value         = { props.values.month}
        labelClass    = 'normal'
      />
  
      <div className  = 'unit spacer'/>
 
      <NumberInput
        {...props}
        errorMessage  = { errors.day }
        identifier    = 'day'
        description   = 'DD'
        value         = { props.values.day }
        labelClass    = 'normal'
      />

      <div className  = 'unit spacer'/>

      <NumberInput
        {...props}
        errorMessage  = { errors.year }
        identifier    = 'year'
        description   = 'YYYY'
        value         = { props.values.year }
        labelClass    = 'normal'
      />

      <AdditionalLabel 
        errorMessage  = { errorMessage }
        errorClass    = { errorName }
        additionalText  = { additionalText }
      />
    </div>
  );
};

export default DateInput;
