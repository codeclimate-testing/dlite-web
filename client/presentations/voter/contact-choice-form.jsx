'use strict';

import React from 'react';

import SelectorCollection from '../selector-collection.jsx';
import HomeLink from '../home-link.jsx';
import ContinueButton from '../continue-button.jsx';

const VALUES = ['Yes', 'No', 'Skip Question'];

const ContactChoiceForm = (props) => {
  return (
    <div>
      <HomeLink />

        <h4>Would you like to receive election information via email or text</h4>
        <form onSubmit={ props.onSubmit } className='contact-choice-form'>
          <div className='inner-bottom'>
            <SelectorCollection
              name='contactChoice'
              values={VALUES}
              onChange={props.onChange}
              selectedValue={props.selectedValue}
            />
          </div>

          <div className='inner-bottom'>
            <h4>Who gets this information?</h4>
            <p>Secretary of State and County election officials have access to this information.</p>
          </div>

          <ContinueButton disabled={props.continueDisabled} />
        </form>
      </div>
  );
};

export default ContactChoiceForm;
