'use strict';

import React from 'react';

import errorClass   from '../helpers/validations/error-class';
import { hasValue } from '../helpers/data/validations';
import NumberInput  from './number-input.jsx';

const ErrorIcon = (props) => {
  if (props.errorClass !== 'error') { return null; }
  return (
    <div className='unit error-icon'></div>
  );
};

const AdditionalLabel = props => {
  if (
    !hasValue(props.additionalText) &&
    !props.errorClass
  ) { return null; }


  let additionalText = props.additionalText;
  if (props.errorClass) {
    additionalText = props.errorMessage;
  }

  let className = 'additional-label input-margin-bottom ' + props.errorClass;

  return (
    <div className={className} >
      { additionalText }
    </div>
  );
};

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
    <div >
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
      />
  
      <div className  = 'unit spacer'/>
 
      <NumberInput
        {...props}
        errorMessage  = { errors.day }
        identifier    = 'day'
        description   = 'DD'
        value         = { props.values.day }
      />

      <div className  = 'unit spacer'/>

      <NumberInput
        {...props}
        errorMessage  = { errors.year }
        identifier    = 'year'
        description   = 'YYYY'
        value         = { props.values.year }
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
