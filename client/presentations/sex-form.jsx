'use strict';

import React from 'react';

import SelectorCollection      from './selector-collection.jsx';
import HomeLink                from './home-link.jsx';
import ContinueButton          from './continue-button.jsx';

const VALUES = ['Female', 'Male'];

const SexForm = (props) => {
  return (
    <div>
      <HomeLink />

      <h4>What's your sex?</h4>
      <form onSubmit={ props.onSubmit } className='sex-form'>
        <div className='inner-bottom'>
          <SelectorCollection
            name='sex'
            values={VALUES}
            onChange={ props.onChange }
            selectedValue={ props.selectedValue }
          />
        </div>

        <ContinueButton disabled={props.continueDisabled}/>
      </form>
    </div>
  );
};

export default SexForm;
