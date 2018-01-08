'use strict';

import React from 'react';

import errorClass   from '../helpers/validations/error-class';
import { hasValue } from '../helpers/data/validations';


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

const NumberInput = (props) => {
  let className = `input-container ${props.identifier}-input`;
  let errorName = errorClass(props);
  let additionalText = props.example;

  return (
    <div className='unit'>
      <label 
        htmlFor={props.identifier}
        className={errorName}
      >
        <ErrorIcon errorClass={ errorName } />
        {props.description}
      </label>
      
      <div className={className}>
        <input
          className='unit size-1-1'
          type='number'
          id={props.identifier}
          name={props.identifier}
          onChange={ props.onChange }
          onBlur = {props.onBlur }
          onFocus = {props.onFocus }
          value={ props.value }
        />
      </div>
      <AdditionalLabel 
        errorMessage  = { props.errorMessage }
        errorClass    = { errorName }
        additionalText  = { additionalText }
      />
    </div>
  );
};

export default NumberInput;
