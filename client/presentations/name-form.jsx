'use strict';

import React from 'react';

import HomeLink  from './home-link.jsx';
import TextInput from './text-input.jsx';
import alicePath from '../helpers/alice-path';

const LegalNameForm = (props) => {
  let continueDisabled = props.legalName.lastName.length === 0;

  let onSubmit = (event) => {
    props.onSubmit(event);
    props.history.push(
      alicePath('/about-me/date-of-birth')
    );
  };

  return (
    <div className='legal-name-form'>
      <HomeLink />

      <h4>What’s your full, legal name?</h4>
      <form onSubmit={onSubmit}>
        <TextInput
          identifier='firstName'
          description='First Name'
          value={props.legalName.firstName}
          onChange={props.onChange}
        />

        <TextInput
          identifier='middleName'
          description='Middle Name(s)'
          value={props.legalName.middleName}
          onChange={props.onChange}
        />

        <TextInput
          identifier='lastName'
          description='Last Name'
          value={props.legalName.lastName}
          onChange={props.onChange}
        />

        <div className='shadow-container'>
          <input
            type="submit"
            value="Continue"
            disabled={continueDisabled}
          />
        </div>
      </form>
    </div>
  )
};

export default LegalNameForm;
