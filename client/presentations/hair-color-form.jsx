'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import alicePath from '../helpers/alice-path';

const HairColorForm = (props) => {

  const hairColorOptions = ['Auburn', 'Bald', 'Black', 'Blonde', 'Brown', 'Gray', 'Red', 'White', 'Other'];
  let formContent = [];

  hairColorOptions.forEach((option) => {
    formContent.push(
      <div key={option} className="input-container hair-color">
        <button value={option} onClick={props.onClick} className={props.hairColor.hairColor === option ? 'selected-button' : 'unselected-button'}> {option} </button>
      </div>
    );
  });

  return (
    <div>
      <Link to={alicePath('/')} >Back to application</Link>
      <form name="hair-color-form" onSubmit={props.onSubmit} className='hair-color-form'>

        {formContent}

        <div className="input-container">
          <input type="submit" name="submit-hair-color" value="Submit" />
        </div>
      </form>
    </div>
  )
};

export default HairColorForm;