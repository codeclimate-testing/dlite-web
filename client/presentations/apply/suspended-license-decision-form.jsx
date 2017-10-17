'use strict';

import React from 'react';

import SelectorCollection      from '../selector-collection.jsx';
import HomeLink                from '../home-link.jsx';
import ContinueButton          from '../continue-button.jsx';

const VALUES = ['Yes', 'No'];

const CitizenStatusForm = (props) => {
  return (
    <div>
      <HomeLink />

      <h4>Have you ever had your driving privilege cancelled, refused, suspended, or revoked?</h4>
      <form onSubmit={ props.onSubmit } className='is-suspended-license-form'>
        <div className='inner-bottom'>
          <SelectorCollection
            name='isSuspended'
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
