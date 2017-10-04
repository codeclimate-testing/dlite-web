'use strict';

import React from 'react';

import SelectorCollection      from '../selector-collection.jsx';
import HomeLink                from '../home-link.jsx';
import ContinueButton          from '../continue-button.jsx';

const VALUES = ['I want to register to vote', 'I am already registered to vote', 'I am eligible but to not want to be registered to vote at this time'];

const OptOut = (props) => {
  return (
    <div>
      <HomeLink />

      <h4>Congratulations! It looks like you meet the requirements to vote.</h4>
      <h5>And text stating "Which best describes you?</h5>
      <form onSubmit={ props.onSubmit } className='opt-out-form'>
        <div className='inner-bottom'>
          <SelectorCollection
            name='optOut'
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

export default OptOut;

