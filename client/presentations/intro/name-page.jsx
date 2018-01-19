'use strict';

import React from 'react';

import Page               from '../../containers/page.jsx';
import TextInput          from '../text-input.jsx';
import SuffixSelector     from '../suffix-selector.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';

const LegalNameForm = (props) => {
  return (
    <Page
      sectionKey='intro'
      {...props}
    >
      <form onSubmit={ props.onSubmit } className='legal-name-form'>
        <h2 className='question'>What's your true full name?</h2>
        <p>
          This is the name that appears on official identity documents
          like your birth certificate and passport.
        </p>

        <TextInput
          {...props}
          identifier='firstName'
          description='First name'
          value={props.legalName.firstName}
          errorMessage={ props.validations.firstName() }
        />

        <TextInput
          {...props}
          identifier='middleName'
          description='Middle name(s)'
          value={props.legalName.middleName}
          errorMessage={ props.validations.middleName() }
        />

        <TextInput
          {...props}
          identifier='lastName'
          description='Last name'
          value={props.legalName.lastName}
          errorMessage={ props.validations.lastName() }
        />

        <SuffixSelector
          identifier='suffix'
          value={ props.legalName.suffix }
          onChange={props.onChange}
        />

        <NavigationButtons
          errorMessage={ props.validations.all() }
          {...props}
        />
      </form>
    </Page>
  );
};

export default LegalNameForm;
