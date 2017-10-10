'use strict';

import React from 'react';

import SelectorCollection      from '../selector-collection.jsx';
import HomeLink                from '../home-link.jsx';
import ContinueButton          from '../continue-button.jsx';

const COLORS = ['Blue', 'Gray', 'Green', 'Hazel', 'Brown'];

const Form = (props) => {
  document.title = props.pageTitle;
  return (
    <div>
      <HomeLink />

      <h4>What color are your eyes?</h4>
      <form onSubmit={ props.onSubmit } className='eye-color-form'>
        <div className='inner-bottom'>
          <SelectorCollection
            name='eyeColor'
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

