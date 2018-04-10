'use strict';

import React from 'react';
import SelectorContents from './selector-contents.jsx';

const CheckboxSelector = function(props) {
  let className = props.className || ' ';
  className += ` ${props.value} choice-selector unit`;
  if (props.selected) { className += ' selected'; }
  if (props.focused === props.value) { className += ' focus'; }

  let labelledBy = props.name + '-' + props.value;

  return (
    <div className={ className }>
      <div className='outline-container'>
        <label
          className='row relative checkbox-selector'
          htmlFor         = { props.value }
          aria-labelledby = { labelledBy }
        >
          <div className='off-screen'>
            <p id={labelledBy}>{props.children}</p>
            <input
              type='checkbox'
              name={props.name}
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
            iconClass={props.iconClass}
          >
           {props.children ? props.children : props.text}
          </SelectorContents>
        </label>
      </div>
    </div>
  );
};

export default CheckboxSelector;
