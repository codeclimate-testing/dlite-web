'use strict';

import React from 'react';
import RadioCollection    from '../radio-collection.jsx';

import NavigationButtons from '../navigation-buttons.jsx';
import Page from '../page.jsx';

const VALUES = [
  "I would like to pre-register to vote",
  "I am already pre-registered to vote in California",
  "I am eligible to vote, but do not want to pre-register to vote"
];

const OptOutFormPreReg = (props) => {

  return (
    <Page
      pageTitle='DMV: License application - Voting pre-registration'
      sectionNumber='3'
      sectionName='Voting pre-registration'
      {...props}
    >
      <div>
        <h4>Which best describes you?</h4>
        <form onSubmit={props.onSubmit} className='opt-out-form'>
          <div className='inner-bottom'>
            <RadioCollection
              key='radio'
              name='optOut'
              values={VALUES}
              onChange={props.onChange}
              selectedValue={props.selectedValue}
            />
          </div>

          <NavigationButtons {...props} />
        </form>
      </div>
    </Page>
  );
};

export default OptOutFormPreReg;