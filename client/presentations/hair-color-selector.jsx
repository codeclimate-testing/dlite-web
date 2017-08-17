'use strict';

import React from 'react';

const hairColors = ['Auburn', 'Bald', 'Black', 'Blonde', 'Brown', 'Gray', 'Red', 'White', 'Other'];

const HairColorSelector = (props) => {

  let hairColorOptions = hairColors.map((color) => {
    return (
      <div key={color} className="input-container hair-color">
        <button name='hairColor' value={color} onClick={props.onChange} className={props.hairColor.hairColor === color ? 'selected-button' : 'unselected-button'}> {color} </button>
      </div>
    );
  });

  return (
    <div className='select-hair-color-block'>
      {hairColorOptions}
    </div>
  );
}

export default HairColorSelector;