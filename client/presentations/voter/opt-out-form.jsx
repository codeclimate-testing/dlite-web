'use strict';

import React from 'react';

import RadioCollection    from '../radio-collection.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import Page               from '../page.jsx';

const VALUES = [
  "I am a new voter in California",
  "I am already registered to vote in California",
  "I am eligible to vote, but do not want to register to vote"
];

const PREREG_VALUES = [
  "I would like to pre-register to vote",
  "I am already pre-registered to vote in California",
  "I am eligible to vote, but do not want to pre-register to vote"
];

let pageTitle = 'DMV: License application - Voting registration'

const OptOut = (props) => {
  let radioList = [];
  let documentHeader = [];
  let documentSelection = [];

  if ((props.dateOfBirth.age === 16) || (props.dateOfBirth.age === 17)) {
    documentHeader.push(
      'Voting pre-registration'
    )
    documentSelection.push(
      <RadioCollection
        key='radio'
        name='optOut'
        values={ PREREG_VALUES }
        onChange={ props.onChange }
        selectedValue={ props.selectedValue }
      />
    );
  }
  else {
    documentHeader.push(
      'Voting registration'
    )
    documentSelection.push(
      <RadioCollection
        key='radio'
        name='optOut'
        values={ VALUES }
        onChange={ props.onChange }
        selectedValue={ props.selectedValue }
      />
    );
  }

  return (
    <Page
      pageTitle={ pageTitle }
      sectionNumber='3'
      sectionName={ documentHeader }
      {...props}
    >
      <div>
        <h4>Which best describes you?</h4>
        <form onSubmit={ props.onSubmit } className='opt-out-form'>
          <div className='inner-bottom'>
            { documentSelection }
          </div>

          <NavigationButtons {...props} />
        </form>
      </div>
    </Page>
  );
};

export default OptOut;
