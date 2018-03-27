'use strict'

import React        from 'react';

import { hasValue } from '../helpers/data/validations';
import Translator   from '../i18n/translator-tag.jsx'

export const ErrorLabel= (props) => {
  if (!props.errorClass) { return null; }

  let errorText = props.errorClass ? props.errorMessage : '';

  let className = 'additional-label input-margin-bottom ' + props.errorClass;

  return (
    <div className={className} role="alert" aria-live="assertive" aria-atomic="true">
      <Translator
        tag             = 'span'
        translationPath = { errorText }
      />
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

export const ErrorMessageBox = (props) => {
  let className = errorClass(props) || errorClass(props.errorMessage);
  if (!hasValue(className)) { return null; }

  className += ' message-box';

  return (
    <div className={className}>
      <div className='unit error-icon' role="alert" aria-live="assertive" aria-atomic="true"></div>
      &nbsp;
      <Translator
        tag             = 'span'
        translationPath = { props.errorMessage }
      />
    </div>
  );
};
