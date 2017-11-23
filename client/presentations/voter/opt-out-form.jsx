'use strict';

import React from 'react';

import RadioCollection         from '../radio-collection.jsx';
import HomeLink                from '../home-link.jsx';
import NavigationButtons       from '../navigation-buttons.jsx';
import SectionHeader           from '../section-header.jsx';

const VALUES = [
  "I am a new voter in California",
  "I am already registered to vote in California",
  "I am eligible to vote, but do not want to register to vote"
];

const OptOut = (props) => {
  document.title = props.pageTitle;
  return (
    <div>
      <HomeLink />
      <SectionHeader
        number='3'
        name='Voting registration'
      />

      <h4>Which best describes you?</h4>
      <form onSubmit={ props.onSubmit } className='opt-out-form'>
        <div className='inner-bottom'>
          <RadioCollection
            name='optOut'
            values={VALUES}
            onChange={ props.onChange }
            selectedValue={ props.selectedValue }
          />
        </div>

        <NavigationButtons {...props} />
      </form>
    </div>
  );
};

export default OptOut;

