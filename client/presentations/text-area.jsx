'use strict';

import React from 'react';
import errorClass   from '../helpers/validations/error-class';
import {
  ErrorIcon,
  AdditionalLabel
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
          className={ className }
          type="text"
          id={ props.identifier }
          name={ props.identifier }
          onChange={ props.onChange }
          value={ props.value }/>
      </div>
      <AdditionalLabel
        errorMessage={ props.errorMessage }
        errorClass={ className }
        additionalText={ additionalText }
      /> 
    </div>
  );
};

export default TextArea;
