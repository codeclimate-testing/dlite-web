'use strict';

import React from 'react';

import HomeLink from './home-link.jsx';
import alicePath from '../helpers/alice-path';
import EyeColorSelector from './eye-color-selector.jsx';

const EyeColorForm = (props) => {
  return (
    <div>
      <HomeLink />

      <form name="eye-color-form" onSubmit={props.onSubmit} className='eye-color-form'>
        <EyeColorSelector eyeColor={props.eyeColor} onChange={props.onChange} />

        <div className="input-container">
          <input type="submit" name="submitEyeColor" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default EyeColorForm;
