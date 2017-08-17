'use strict';

import React from 'react';

const hairColors = ['Auburn', 'Bald', 'Black', 'Blonde', 'Brown', 'Gray', 'Red', 'White', 'Other'];

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

const HairColorSelector = (props) => {

  let hairColorOptions = hairColors.map((color) => {
    return (
      <ColorSelector key={color} type='hair' color={color} currentColor={props.hairColor.hairColor} onClick={props.onChange} />
    );
  });

  return (
    <div className='select-hair-color-block'>
      { hairColorOptions }
    </div>
  );
}

export default HairColorSelector;
