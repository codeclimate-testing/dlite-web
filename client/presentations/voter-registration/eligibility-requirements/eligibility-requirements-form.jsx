'use strict';

import React from 'react';

import RadioSelector      from '../../radio-selector.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import Page               from '../../../containers/page.jsx';
import NavigationButtons  from '../../navigation-buttons.jsx';

const values = {
  Yes: 'Yes',
  No: 'No',
  Skip: 'Skip Section'
};

const EligibilityRequirements = (props) => {
  
  return (
    <Page
      {...props}
      sectionKey='voterRegistration'
    >
      <div>
        <h4>Do you meet all of the voter registration requirements listed below?</h4>
        <ul className='bullet-list'>
          <li>I am a United States citizen</li>
          <li>I am a resident of California</li>
          <li>I am not currently in state or federal prison or on parole for the conviction of a felony</li>
          <li>I am not currently found mentally incompetent to vote by a court</li>
        </ul>

        <p>If you answer 'No' or 'Skip Section', you cannot register to vote.</p>
        <br></br>
          <form onSubmit={props.onSubmit} className='eligibility-requirements-form'>
          <div className='inner-bottom'>
            <RadioCollection  
              {...props}
              name='eligibilityRequirements'
              text={values}
            >
              <RadioSelector 
                value='Yes'
              />
              <RadioSelector 
                value='No'
              />
              <RadioSelector 
                value='Skip'
              />
            </RadioCollection>
          </div>

          <NavigationButtons {...props} />
          </form>
        <br /><br />
        <p><b>What if I don't meet the requirements?</b></p>
        <p>If you don't meet all the requirements, you are not eligible to register to vote.</p>
        <p>Your response to this question <b>will not</b> be shared with election officials.</p>

      </div>
    </Page>
  );
};


export default EligibilityRequirements;
