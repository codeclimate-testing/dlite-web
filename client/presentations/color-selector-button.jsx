'use strict';

import React from 'react';

const ColorSelector = function(props) {
  let name      = `${props.type}Color`;
  let className = props.selected ? 'selected button' : 'neutral button';
  let labelElement;

  let onFocus = (event) => {
    labelElement.className += ' focused';
  };

  let onBlur = (event) => {
    labelElement.className = labelElement.className.replace(' focused', '');
  }

  return (
    <label
      className='radio-selector unit relative'
      htmlFor={props.color}
      ref={ (element) => { return labelElement = element; } }
    >
      <div className='off-screen'>
        <input
          type='radio'
          name={name}
          id={props.color}
          value={props.color}
          checked={props.selected}
          onChange={props.onChange}
          tabIndex={props.tabIndex}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
      <div className='unit shadow-container'>
        <div className={className}>
          {props.color}
        </div>
      </div>
    </label>
  );
};

export default ColorSelector;
