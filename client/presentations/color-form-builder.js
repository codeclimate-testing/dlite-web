'use strict';

import React from 'react';

import ColorSelectorCollection from './color-selectors-collection.jsx';
import HomeLink                from './home-link.jsx';

const formGenerator = (colors, type) => {
  let formClassName = `${type}-color-form inner-top inner-bottom`;
  let buttonName = `submit${type[0].toUpperCase()}${type.slice(1)}Color`;
  let propKey = `${type}Color`;

  const ColorForm = (props) => {
    return (
      <div>
        <HomeLink />

        <form onSubmit={props.onSubmit} className={formClassName}>
          <div className='inner-bottom'>
            <ColorSelectorCollection
              colors={colors}
              type={type}
              onChange={props.onChange}
              state={props[propKey]}
            />
          </div>

          <input type="submit" name={buttonName} value="Submit" />
        </form>
      </div>
    );
  };

  return ColorForm;
};

export default formGenerator;

