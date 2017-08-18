'use strict';

import React from 'react';

import ColorSelectorCollection from './color-selectors-collection.jsx';
import HomeLink                from './home-link.jsx';

const formGenerator = (colors, type) => {
  
};

const COLORS = ['Blue', 'Gray', 'Green', 'Hazel', 'Brown'];


const EyeColorForm = (props) => {
  let type = 'eye';
  let formClassName = `${type}-color-form inner-top inner-bottom`;
  let buttonName = `submit${type[0].toUpperCase()}${type.slice(1)}Color`;

  return (
    <div>
      <HomeLink />

      <form name="eye-color-form" onSubmit={props.onSubmit} className={formClassName}>
        <div className='inner-bottom'>
          <ColorSelectorCollection
            colors={COLORS}
            type={type}
            onChange={props.onChange}
            state={props.eyeColor}
          />
        </div>

        <input type="submit" name={buttonName} value="Submit" />
      </form>
    </div>
  );
};

export default EyeColorForm;

