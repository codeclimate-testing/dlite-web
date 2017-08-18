'use strict';

import React from 'react';

import ColorSelectorCollection from './color-selectors-collection.jsx';
import HomeLink                from './home-link.jsx';

const COLORS = ['Auburn', 'Bald', 'Black', 'Blonde', 'Brown', 'Gray', 'Red', 'White', 'Other'];

const HairColorForm = (props) => {
  return (
    <div>
      <HomeLink />

      <form name="hair-color-form" onSubmit={props.onSubmit} className='hair-color-form'>
        <ColorSelectorCollection
          colors={COLORS}
          type='hair'
          onChange={props.onChange}
          state={props.hairColor}
        />

        <div className="input-container">
          <input type="submit" name="submit-hair-color" value="Submit" />
        </div>
      </form>
    </div>
  )
};

export default HairColorForm;
