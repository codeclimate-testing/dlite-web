'use strict';

import React from 'react';
import SelectorContents from './selector-contents.jsx';
import errorClass   from '../helpers/validations/error-class';
import {
  ErrorIcon,
  AdditionalLabel
} from './validations.jsx';

const RadioSelector = function(props) {
  let className = 'choice-selector unit';
  if (props.selected) { className += ' selected'; };
  if (props.focused)  { className += ' focus'; }
  if (props.custom)   { className += ` ${props.name} ${props.value}`; }

  let id = props.name + '-' + props.value;

  let errorName = errorClass(props);
  let additionalText  = props.example;

  return (
    <div className={ className }>
      <div>
        <ErrorIcon errorClass={ errorName } />
        <AdditionalLabel
          errorMessage={ props.errorMessage }
          errorClass={ errorName }
          additionalText={ additionalText }
        />
      </div>
      <div className='outline-container'>
        <label
          className='row relative radio-selector'
          htmlFor={id}
        > 
          
          <div className='off-screen'>
            <input
              type='radio'
              name={props.name}
              id={id}
              value={props.value}
              checked={props.selected}
              onChange={props.onChange}
              tabIndex={props.tabIndex}
              onFocus={props.onFocus}
              onBlur={props.onBlur}
            />
          </div>
          <SelectorContents
            value={props.value}
            text={props.text}
            iconClass={props.iconClass}
          />
        </label>
      </div>
    </div>
  );
};

export default RadioSelector;
