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
  let parentClassName = `text-input-block input-margin-bottom ${name}`;

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
    <div className={parentClassName}>
      <label
        htmlFor         = { id }
        className       = { className }
      >
        <ErrorIcon
          errorClass={ className }
        />
        <div className='unit'>
          { props.children ? props.children : props.description }
        </div>
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
