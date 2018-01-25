'use strict'

import React        from 'react';

import { hasValue } from '../helpers/data/validations';

export const ErrorLabel= (props) => {
  if (!props.errorClass) { return null; }

  let errorText = props.errorClass ? props.errorMessage : '';

  let className = 'additional-label input-margin ' + props.errorClass;

  return (
    <div className={className} >
      { errorText }
    </div>
  );
};

export const ErrorIcon = (props) => {
  if (props.errorClass !== 'error') { return null; }
  return (
    <div className='unit error-icon'></div>
  );
};

export const errorMessage = (errors) => {  
  return Object.values(errors).reduce((total, error) => {
    if (hasValue(error)) {
      total = error;
    }
    return total;
  }, '');
};

export const errorClass = (message) => {
  return hasValue(message) ? 'error' : ''
};
