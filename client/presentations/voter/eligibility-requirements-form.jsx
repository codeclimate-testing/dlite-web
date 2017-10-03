'use strict';

import React                    from 'react';

import SelectorCollection      from '../selector-collection.jsx';
import HomeLink                from '../home-link.jsx';
import ContinueButton          from '../continue-button.jsx';

const VALUES = ['Yes', 'No', 'Skip Section'];

const EligibilityRequirements = (props) => {
  return (
    <div>
      <HomeLink />

        <h4>Do you meet all of the voter registration requirements listed below?</h4>

        <ul>
        <li>I am a United States citizen</li>
        <li>I am a resident of California</li>
        <li>I am not currently in state or federal prison or on parole for the conviction of a felony</li>
        <li>I am not currently found mentally incompetent to vote by a court</li>
        </ul>

        <p>If you answer 'No' or 'Skip Section', you cannot be registered to vote.</p>
        <form onSubmit={ props.onSubmit } className='eligibility-requirements-form'>
        <div className='inner-bottom'>
          <SelectorCollection
            name='eligibilityRequirements'
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

export default EligibilityRequirements;
