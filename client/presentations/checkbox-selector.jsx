'use strict';

import React from 'react';
import SelectorContents from './selector-contents.jsx';

const CheckboxSelector = function(props) {
  let className = props.selected ? 'choice-selector selected' : 'choice-selector';
  if (props.focused === props.value) { className += ' focus'; }

  return (
    <div className={ className }>
      <div className='outline-container'>
        <label
          className='row relative checkbox-selector'
          htmlFor={props.value}
        >
          <div className='off-screen'>
            <input
              type='checkbox'
              name={props.value}
              id={props.value}
              checked={props.selected}
              value={props.value}
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

export default CheckboxSelector;