'use strict';

import React from 'react';

import { hasValue } from '../helpers/data/validations';
import errorClass   from '../helpers/validations/error-class';

const ErrorIcon = (props) => {
  if (props.errorClass !== 'error') { return null; }
  return (
    <div className='unit error-icon'></div>
  );
};

const AdditionalLabel = (props) => {
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

const TextInput = (props) => {
  let id              = props.id   || props.identifier;
  let name            = props.name || props.identifier;
  let additionalText  = props.example;

  let className = errorClass(props);

  return (
    <div className='text-input-block input-margin-bottom'>
      <label
        htmlFor={ id }
        className={ className }
      >
        <ErrorIcon errorClass={ className } />
        { props.description }
      </label>
      <div className="input-container">
        <input
          className={ className }
          type='text'
          id={ id }
          name={ name }
          onChange={ props.onChange }
          onBlur={ props.onBlur }
          onFocus={ props.onFocus }
          value={ props.value }
        />
      </div>
      <AdditionalLabel
        errorMessage={ props.errorMessage }
        errorClass={ className }
        additionalText={ additionalText }
      />
    </div>
  );
};

export default TextInput;
