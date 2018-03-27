'use strict';

import React        from 'react';
import {
  ErrorIcon,
  ErrorLabel,
  errorClass
} from './validations.jsx';
import ExampleLabel from './example-label.jsx';
import Translator   from '../i18n/translator-tag.jsx';

const TextInput = (props) => {
  let id              = props.id   || props.identifier;
  let name            = props.name || props.identifier;
  let className       = errorClass(props.errorMessage);
  let inputClass      = props.error ? 'error' : className;

  const GenerateExampleLabel = (props) => {
    if(!props.example) {
      return null;
    }
    return (
      <ExampleLabel>
        <Translator tag = 'span' translationPath = { props.example } />
      </ExampleLabel>
    );
  }
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
        { props.children ? props.children : props.description }
      </label>

      <GenerateExampleLabel example = { props.example } />

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
