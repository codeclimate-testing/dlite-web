'use strict';

import React from 'react';

import ColorSelectorCollection from './color-selectors-collection.jsx';
import HomeLink                from './home-link.jsx';

const COLORS = ['Blue', 'Gray', 'Green', 'Hazel', 'Brown'];

const EyeColorForm = (props) => {
  return (
    <div>
      <HomeLink />

      <form name="eye-color-form" onSubmit={props.onSubmit} className='eye-color-form'>
        <ColorSelectorCollection
          colors={COLORS}
          type='eye'
          onChange={props.onChange}
          state={props.eyeColor}
        />

        <div className="input-container">
          <input type="submit" name="submitEyeColor" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default EyeColorForm;
