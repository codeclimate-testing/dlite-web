'use strict';

import React from 'react';

const SelectorButton = function(props) {
  const focusedClass = ' focus';

  let className = props.selected ? 'tap selected button' : 'tap button';
  let labelElement;

  let onFocus = (event) => {
    labelElement.className += focusedClass;
  };

  let onBlur = (event) => {
    labelElement.className = labelElement.className.replace(focusedClass, '');
  }

  return (
    <label
      className='radio-selector unit relative'
      htmlFor={props.name + props.value}
      ref={ (element) => { return labelElement = element; } }
    >
      <div className='off-screen'>
        <input
          type='radio'
          name={props.name}
          id={props.name + props.value}
          value={props.value}
          checked={props.selected}
          onChange={props.onChange}
          tabIndex={props.tabIndex}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
      <div className='unit shadow-container'>
        <div className={className}>
          {props.value}
        </div>
      </div>
    </label>
  );
};

export default SelectorButton;
