'use strict';

import React        from 'react';
import {
  ErrorIcon,
  ErrorLabel,
  errorClass
} from './validations.jsx';
import ExampleLabel from './example-label.jsx';

const TextInput = (props) => {
  let id              = props.id   || props.identifier;
  let name            = props.name || props.identifier;
  let className       = errorClass(props.errorMessage);
  let inputClass      = props.error ? 'error' : className;

  return (
    <div className='text-input-block input-margin-bottom'>
      <label
        htmlFor         = { id }
        className       = { className }
        aria-labelledby = { id }
      >
        <div className='unit'>{ props.description }</div>
        <ErrorIcon
          errorClass={ className }
        />
      </label>

      <ExampleLabel
        example = { props.example }
      />

      <div className="input-container">
        <input
          className = { inputClass }
          type      = 'text'
          id        = { id }
          name      = { name }
          onChange  = { props.onChange }
          onBlur    = { props.onBlurValidate }
          onFocus   = { props.onFocusClearValidation }
          value     = { props.value }
          placeholder = { props.placeholder }
        />
      </div>
      <ErrorLabel
        errorMessage  = { props.errorMessage }
        errorClass    = { className }
      />
    </div>
  );
};

export default TextInput;
