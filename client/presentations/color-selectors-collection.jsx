'use strict';

import React from 'react';
import ColorSelectorButton from './color-selector-button.jsx';

const HairColorSelector = (props) => {
  let typeName = `${props.type}Color`;
  let currentColor = props.state[typeName];

  let colorButtons = props.colors.map((color) => {
    return (
      <ColorSelectorButton
        key={color}
        type={props.type}
        color={color}
        currentColor={currentColor}
        onClick={props.onChange}
      />
    );
  });

  return (
    <div className='row selector-collection'
      role='radiogroup'
      aria-labelledby={typeName}>
        { colorButtons }
    </div>
  );
}

export default HairColorSelector;

