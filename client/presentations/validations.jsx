'use strict'

import React        from 'react';

import { hasValue } from '../helpers/data/validations';

export const ErrorLabel= (props) => {
  if (!props.errorClass) { return null; }


  let additionalText = '';
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

export const ErrorIcon = (props) => {
  if (props.errorClass !== 'error') { return null; }
  return (
    <div className='unit error-icon'></div>
  );
};