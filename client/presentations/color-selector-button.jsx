'use strict';

import React from 'react';

const selectedCSS = (propValue, selectedValue) => {
  return propValue === selectedValue ? 'selected-button' : 'unselected-button';
};

const ColorSelector = function(props) {
  let name = `${props.type}Color`;
  let containerClassName = `input-container ${ props.type }-color`;

  return (
    <div key={props.color} className={containerClassName}>
      <button
          name={name}
          value={props.color}
          onClick={props.onClick}
          className={ selectedCSS(props.currentColor, props.color) }>
        {props.color}
      </button>
    </div>
  );
};

export default ColorSelector;
