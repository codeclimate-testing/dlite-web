'use strict';

import React from 'react';
import errorClass   from '../helpers/validations/error-class';
import {
  ErrorIcon,
  ErrorLabel
} from './validations.jsx';

const TextArea = (props) => {
  let additionalText  = props.example;
  let className = errorClass(props);

  return (
    <div className='text-area-input-block'>
      <label 
        htmlFor={ props.identifier }
        className={ className }
      >
        <ErrorIcon errorClass={ className } /> 
        { props.description }
      </label>
      <div className="input-container">
        <textarea
          className = { className }
          type      = "text"
          id        = { props.identifier }
          name      = { props.identifier }
          onChange  = { props.onChange }
          onBlur    = { props.onBlurValidate }
          onFocus   = { props.onFocusClearValidation }
          value     = { props.value }
        />
      </div>
      <ErrorLabel
        errorMessage={ props.errorMessage }
        errorClass={ className }
      /> 
    </div>
  );
};

export default TextArea;
