'use strict';

import React from 'react';

import SelectorCollection      from './selector-collection.jsx';
import HomeLink                from './home-link.jsx';
import ContinueButton          from './continue-button.jsx';

const COLORS = ['Auburn', 'Bald', 'Black', 'Blonde', 'Brown', 'Gray', 'Red', 'White', 'Other'];

const Form = (props) => {
  return (
    <div>
      <HomeLink />

      <h4>What color is your hair?</h4>
      <form onSubmit={ props.onSubmit } className='hair-color-form'>
        <div className='inner-bottom'>
          <SelectorCollection
            name='hairColor'
            values={COLORS}
            onChange={ props.onChange }
            selectedValue={ props.selectedValue }
          />
        </div>

        <ContinueButton disabled={props.continueDisabled}/>
      </form>
    </div>
  );
};

export default Form;

