'use strict';

import React                    from 'react';

import SelectorCollection      from '../selector-collection.jsx';
import HomeLink                from '../home-link.jsx';
import Page                    from '../page.jsx';
import NavigationButtons       from '../navigation-buttons.jsx';

const VALUES = ['Yes', 'No', 'Skip Section'];
let pageTitle = 'DMV: License application - Voting registration'

const EligibilityRequirements = (props) => {
  return (
    <Page
      pageTitle={pageTitle}
      sectionNumber='3'
      sectionName='Voting registration'
      {...props}
    >
      <div>
        <h4>Do you meet all of the voter registration requirements listed below?</h4>

        <ul>
        <li>I am a United States citizen</li>
        <li>I am a resident of California</li>
        <li>I am not currently in state or federal prison or on parole for the conviction of a felony</li>
        <li>I am not currently found mentally incompetent to vote by a court</li>
        </ul>

        <p>If you answer 'No' or 'Skip Section', you cannot be registered to vote.</p>
        <br></br>
        <form onSubmit={ props.onSubmit } className='eligibility-requirements-form'>
        <div className='inner-bottom'>
          <SelectorCollection
            name='eligibilityRequirements'
            values={VALUES}
            onChange={ props.onChange }
            selectedValue={ props.selectedValue }
          />
        </div>

        <NavigationButtons {...props} />
        </form>
        <br></br>
        <p><b>What if I don't meet the requirements?</b></p>
        <p>If you don't meet all the requirements, you are not eligible to register to vote.</p>
        <p>Your response to this question <b>will not</b> be shared with election officials.</p>
      </div>
    </Page>
  );
};

export default EligibilityRequirements;
