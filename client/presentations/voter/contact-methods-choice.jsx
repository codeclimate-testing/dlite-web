'use strict';

import React from 'react';

import SelectorCollection from '../selector-collection.jsx';
import Page                   from '../page.jsx';

const VALUES = ['Yes', 'No', 'Skip Question'];

const ContactChoice = (props) => {
  return (
    <Page
      sectionNumber='3'
      sectionName='Voting registration'
      {...props}
    >
      <div className='contact-methods-choice-form'>
        <h4>Would you like to receive election information via email or text</h4>
        <div className='inner-bottom'>
          <SelectorCollection
            name='shouldContact'
            values={VALUES}
            onChange={props.onChange}
            selectedValue={props.selectedValue}
          />
        </div>

        <div className='inner-bottom'>
          <h4>Who gets this information?</h4>
          <p>Secretary of State and County election officials have access to this information.</p>
        </div>
      </div>
    </Page>
  );
};

export default ContactChoice;
