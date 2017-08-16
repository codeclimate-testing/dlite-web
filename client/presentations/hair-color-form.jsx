'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import alicePath from '../helpers/alice-path';
import HairColorSelector from './hair-color-selector.jsx';

const HairColorForm = (props) => {

  return (
    <div>
      <Link to={alicePath('/')} >Back to application</Link>
      <form name="hair-color-form" onSubmit={props.onSubmit} className='hair-color-form'>

        <HairColorSelector hairColor={props.hairColor} onClick={props.onClick} />

        <div className="input-container">
          <input type="submit" name="submit-hair-color" value="Submit" />
        </div>
      </form>
    </div>
  )
};

export default HairColorForm;