'use strict';

import React from 'react';

import SelectorCollection from '../selector-collection.jsx';
import Page from '../page.jsx';
import NavigationButtons from '../navigation-buttons.jsx';

const VALUES = ['Yes', 'No', 'Skip Section'];

const PreRegEligibilityRequirements = (props) => {

  return (
    <Page
      pageTitle={props.pageTitle}
      sectionNumber='3'
      sectionName={props.sectionName}
      {...props}
    >

      <div>
        <h4>Do you meet all of the voter pre-registration requirements listed below?</h4>

        <ul className='bullet-list'>
          <li>I am a United States citizen</li>
          <li>I am a resident of California</li>
          <li>I am 16 or 17 years old and would like to pre-register to vote</li>
          <li>I am not currently in state or federal prison or on parole for the conviction of a felony</li>
          <li>I am not currently found mentally incompetent to vote by a court</li>
        </ul>

        <p>If you answer 'No' or 'Skip Section', you cannot pre-register to vote.</p>
        <br></br>
        <form onSubmit={props.onSubmit} className='eligibility-requirements-form'>
          <div className='inner-bottom'>
            <SelectorCollection
              name='eligibilityRequirements'
              values={VALUES}
              onChange={props.onChange}
              selectedValue={props.selectedValue}
            />
          </div>

          <NavigationButtons {...props} />
        </form>
        <br></br>
        <p><b>What if I don't meet the requirements?</b></p>
        <p>If you don't meet all the requirements, you are not eligible to pre-register to vote.</p>
        <p>Your response to this question <b>will not</b> be shared with election officials.</p>
      </div>
    </Page>
  );
};

export default PreRegEligibilityRequirements;
