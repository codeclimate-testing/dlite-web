'use strict';

import React from 'react';

const ColorSelector = function(props) {
  let name      = `${props.type}Color`;
  let className = props.selected ? 'selected button' : 'neutral button';
  let radio;

  let onLabelFocus = (event) => {
    console.log('label focused!', radio);
    radio.focus();
  };

  return (
    <div className='color-selector unit relative'>
      <div className='radio-control off-screen'>
        <input
          type='radio'
          name={name}
          id={props.color}
          value={props.color}
          checked={props.selected}
          onChange={props.onChange}
          ref={(input) => { radio = input; }}
        />
      </div>
      <div className='unit shadow-container'>
        <label
          className={className}
          htmlFor={props.color}
          tabIndex={props.tabIndex}
          onFocus={onLabelFocus}
        >
          {props.color}
        </label>
      </div>
      <div className='unit spacer'></div>
    </div>
  );
};

export default ColorSelector;
