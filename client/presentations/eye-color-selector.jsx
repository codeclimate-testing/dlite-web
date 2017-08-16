'use strict'

import React from 'react';

const eyeColors = ['Blue', 'Gray', 'Green', 'Hazel', 'Brown'];

const EyeColorSSelector = (props) => {

  let eyeColorOptions = eyeColors.map((color) => {
    return (
      <div key={color} className="input-container eye-color">
        <button name='eyeColor' value={color} onClick={props.onChange} className={props.eyeColor.eyeColor === color ? 'selected-button' : 'unselected-button'}> {color} </button>
      </div>
    );
  });

  return (
    <div className='select-eye-color-block'>
      {eyeColorOptions}
    </div>
  );

}

export default EyeColorSSelector;