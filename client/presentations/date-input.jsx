'use strict';

import React from 'react';

import { hasValue } from '../helpers/data/validations';
import NumberInput  from './number-input.jsx';
import Translator   from '../i18n/translator-tag.jsx';
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
        {props.children}
      </label>

      <NumberInput
        identifier              = 'month'
        example                 = 'shared.labels.mm'
        value                   = { props.values.month}
        error                   = { hasValue(errors.month) }
        onChange                = { props.onChange }
        onBlurValidate          = { props.onBlurValidate }
        onFocusClearValidation  = { props.onFocusClearValidation }
      />

      <div className  = 'unit spacer'/>

      <NumberInput
        identifier              = 'day'
        example                 = 'shared.labels.dd'
        value                   = { props.values.day }
        error                   = { hasValue(errors.day) }
        onChange                = { props.onChange }
        onBlurValidate          = { props.onBlurValidate }
        onFocusClearValidation  = { props.onFocusClearValidation }
      />

      <div className  = 'unit spacer'/>

      <NumberInput
        identifier              = 'year'
        example                 = 'shared.labels.YYYY'
        value                   = { props.values.year }
        error                   = { hasValue(errors.year)  }
        onChange                = { props.onChange }
        onBlurValidate          = { props.onBlurValidate }
        onFocusClearValidation  = { props.onFocusClearValidation }
      />

      <ErrorLabel
        errorMessage  = { message }
        errorClass    = { addError }
      />
    </div>
  );
};

export default DateInput;
