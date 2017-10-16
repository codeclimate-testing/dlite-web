
'use strict';

import React from 'react';
import SelectorCollection      from '../selector-collection.jsx';
import HomeLink                from '../home-link.jsx';
import ContinueButton          from '../continue-button.jsx';

const values = ['Yes', 'No', 'Skip Question']

const DonateContribution = (props) => {
  return (
    <div>
      <HomeLink />

      <h4>Do you want to make a voluntary contribution of $2?</h4>
      <p><i>(optional)</i></p>
      <p>Your donation helps support and promote organ and tissue donation.</p>
      <form onSubmit={ props.onSubmit } className='donate-contribution-form'>
        <div className='inner-bottom'>
          <SelectorCollection
            name='donateContribution'
            values={values}
            onChange={ props.onChange }
            selectedValue={ props.selectedValue }
          />
        </div>

        <ContinueButton disabled={props.continueDisabled}/>
      </form>
    </div>
  );
};

export default DonateContribution;
