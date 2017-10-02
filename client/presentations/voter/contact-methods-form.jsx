'use strict';

import React from 'react';

import SelectorCollection from '../selector-collection.jsx';
import HomeLink from '../home-link.jsx';
import ContinueButton from '../continue-button.jsx';

const VALUES = ['Add or Update', 'Remove', 'Skip Question'];

const ContactMethodsForm = (props) => {
  return (
    <div>
      <HomeLink />

        <h4>Would you like to share your contact information with election officials?</h4>
        <h5>Election officials include Secretary of State and election campaigners.</h5>
        <form onSubmit={ props.onSubmit } className='contact-methods-form'>
          <div className='inner-bottom'>
            <SelectorCollection
              name='contactMethods'
              values={VALUES}
              onChange={props.onChange}
              selectedValue={props.selectedValue}
            />
          </div>

          <ContinueButton disabled={props.continueDisabled} />
        </form>
      </div>
  );
};

export default ContactMethodsForm;
