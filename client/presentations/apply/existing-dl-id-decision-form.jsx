'use strict';

import React from 'react';

import SelectorCollection      from '../selector-collection.jsx';
import HomeLink                from '../home-link.jsx';
import ContinueButton          from '../continue-button.jsx';

const VALUES = ['Yes', 'No'];

const Form = (props) => {
  return (
    <div>
      <HomeLink />

      <h4>Have you ever had a driver license or state-issued ID card?</h4>
      <h5>The license or ID card must be issued by a U.S, state or another country. </h5>
      <form onSubmit={ props.onSubmit } className='has-existing-dl-id-form'>
        <div className='inner-bottom'>
          <SelectorCollection
            name='hasExisting'
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

export default Form;
