'use strict';

import React from 'react';

// extracted this out because I believe it will be reusable for the checkboxes
const SelectorContents = (props) => {
  const iconClass = 'icon-region unit ' + props.iconClass || '';
  const text = props.text || props.value;
  return (
    <div className='unit selector-contents'>
      <div className={iconClass} />
      <div className='text-region last-unit'>{text}</div>
    </div>
  );
};

const RadioSelector = function(props) {
  const focusedClass = ' focus';

  let className = props.selected ? 'choice-selector selected' : 'choice-selector';
  let containerElement;

  let onFocus = (event) => {
    containerElement.className = className + focusClass;
  };

  let onBlur = (event) => {
    containerElement.className = className;
  }

  let id = props.name + '-' + props.value;

  return (
    <div className={className}>
      <div
        className='outline-container'
        ref={ (element) => { return containerElement = element; } }
      >
        <label
          className='unit relative radio-selector'
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
              onFocus={onFocus}
              onBlur={onBlur}
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
