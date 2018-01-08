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
        <h2>Welcome!</h2>
        <h2 className='question pad-bottom-10'>What's your true full name?</h2>
        <p className='pad-bottom-20'>
          This is the name that appears on official identity documents
          like your birth certificate and passport.
        </p>

        <TextInput
          identifier='firstName'
          description='First name'
          value={props.legalName.firstName}
          errorMessage={ props.validations.firstName() }
          onChange={props.onChange}
          onBlur={props.onBlurValidate}
          onFocus={props.onFocusClearValidation}
        />

        <TextInput
          identifier='middleName'
          description='Middle name(s)'
          value={props.legalName.middleName}
          errorMessage={ props.validations.middleName() }
          onChange={props.onChange}
          onBlur={props.onBlurValidate}
          onFocus={props.onFocusClearValidation}
        />

        <TextInput
          identifier='lastName'
          description='Last name'
          value={props.legalName.lastName}
          errorMessage={ props.validations.lastName() }
          onChange={props.onChange}
          onBlur={props.onBlurValidate}
          onFocus={props.onFocusClearValidation}
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
