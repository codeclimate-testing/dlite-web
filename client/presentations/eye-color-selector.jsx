'use strict'

import React from 'react';

const eyeColors = ['Blue', 'Gray', 'Green', 'Hazel', 'Brown'];

const selectedCSS = (propValue, selectedValue) => {
  return propValue === selectedValue ? 'selected-button' : 'unselected-button';
}

const ColorSelector = function(props) {
  let name = `${props.type}Color`;
  let containerClassName = `input-container ${ props.type }-color`;

  return (
    <div key={props.color} className={containerClassName}>
      <button
          name={name}
          value={props.color}
          onClick={props.onClick}
          className={ selectedCSS(props.eyeColor, props.color) }>
        {props.color}
      </button>
    </div>
  );
}

const EyeColorSelectors = (props) => {
  let eyeColorOptions = eyeColors.map((color) => {
    return (
      <ColorSelector key={color} type='eye' color={color} eyeColor={props.eyeColor.eyeColor} onClick={props.onChange} />
    );
  });

  return (
    <div className='select-eye-color-block'>
      { eyeColorOptions }
    </div>
  );
}

export default EyeColorSelectors;
