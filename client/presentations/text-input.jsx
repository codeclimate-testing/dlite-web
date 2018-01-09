'use strict';

import React from 'react';
import errorClass   from '../helpers/validations/error-class';

import {
  ErrorIcon,
  AdditionalLabel
} from './validations.jsx';

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
