'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import alicePath from '../helpers/alice-path';
import EyeColorSelector from './eye-color-selector.jsx';

const EyeColorForm = (props) => {

  return (
    <div>
      <Link to={alicePath('/')} >Back to application</Link>
      <form name="eye-color-form" onSubmit={props.onSubmit} className='eye-color-form'>

        <EyeColorSelector eyeColor={props.eyeColor} onChange={props.onChange} />

        <div className="input-container">
          <input type="submit" name="submitEyeColor" value="Submit" />
        </div>
      </form>
    </div>
  )
};

export default EyeColorForm;