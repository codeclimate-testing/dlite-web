'use strict';

import React from 'react';

const selectedCSS = (propValue, selectedValue) => {
  return propValue === selectedValue ? 'selected' : 'neutral';
};

const ColorSelector = function(props) {
  let name = `${props.type}Color`;
  let className = selectedCSS(props.currentColor, props.color);
  let ariaChecked = className == 'selected' ? 'true' : 'false';

  return (
    <div className='color-selector'>
      <div key={props.color} className='unit'>
        <div className='shadow-container'>
          <button
              role="radio"
              aria-checked={ariaChecked}
              name={name}
              value={props.color}
              onClick={props.onClick}
              className={className}>
            {props.color}
          </button>
        </div>
      </div>
      <div className='unit spacer'></div>
    </div>
  );
};

export default ColorSelector;
