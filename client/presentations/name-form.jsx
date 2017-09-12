'use strict';

import React from 'react';

import HomeLink         from './home-link.jsx';
import TextInput        from './text-input.jsx';
import ContinueButton   from './continue-button.jsx';
import navigateOnSubmit from '../helpers/navigate-on-submit';

const LegalNameForm = (props) => {
  let continueDisabled = props.legalName.lastName.length === 0;
  let onSubmit = navigateOnSubmit('/about-me/date-of-birth', props);

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

        <ContinueButton disabled={continueDisabled} />
      </form>
    </div>
  );
};

export default LegalNameForm;
