'use strict';

import React from 'react';

import SelectorCollection      from '../selector-collection.jsx';
import HomeLink                from '../home-link.jsx';
import ContinueButton          from '../continue-button.jsx';

const VALUES = ['Yes', 'No', 'Skip Section'];

const CitizenStatusForm = (props) => {
  return (
    <div>
      <HomeLink />

      <h4>Are you a United States Citizen?</h4>
      <h5>Answering this question is optional.</h5>
      <form onSubmit={ props.onSubmit } className='citizen-status-form'>
        <div className='inner-bottom'>
          <SelectorCollection
            name='citizenStatus'
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

export default CitizenStatusForm;
