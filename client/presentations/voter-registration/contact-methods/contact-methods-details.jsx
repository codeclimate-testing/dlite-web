'use strict';

import React        from 'react';
import TextInput    from '../../text-input.jsx';
import NumberInput  from '../../number-input.jsx';
import { hasValue } from '../../../helpers/data/validations';
import translations from '../../../i18n';
import {
  ErrorIcon,
  ErrorLabel,
  errorMessage,
  errorClass
} from '../../validations.jsx';
import ExampleLabel from '../../example-label.jsx';

const ContactDetails = (props) => {
  if(props.contactMethods.shouldContact !== 'Yes') { return null; } let errors = {
    one: props.validations.phoneNumber1(),
    two: props.validations.phoneNumber2(),
    three: props.validations.phoneNumber3()
  };

  let message = errorMessage(errors);
  let addError = errorClass(message);

  return (
    <div className='contact-methods-details-form'>
      <hr/>
      <h2 className='question'>{translations.votingRegistration.contactInfoPage.formPrompt}</h2>
      <p className='translation-missing'>This is optional</p>

      <TextInput
        {...props}
        identifier    = 'emailAddress'
        description   = {translations.votingRegistration.contactInfoPage.emailLabel}
        example       = {translations.votingRegistration.contactInfoPage.emailExample}
        value         = {props.contactMethods.emailAddress}
        errorMessage  = {props.validations.emailAddress()}
      />

      <label
        htmlFor       = 'phoneNumber'
        className     = { addError }
      >
        <ErrorIcon errorClass = { addError } />
        {translations.votingRegistration.contactInfoPage.phoneLabel}
      </label>

      <ExampleLabel
        example = {translations.votingRegistration.contactInfoPage.phoneExample}

      />

      <NumberInput
        {...props}
        identifier    = 'phoneNumber1'
        value         = { props.contactMethods.phoneNumber1 }
        error         = { hasValue(errors.one)}
      />
      <div className  = 'unit spacer'/>

      <NumberInput
        {...props}
        identifier    = 'phoneNumber2'
        value         = { props.contactMethods.phoneNumber2 }
        error         = { hasValue(errors.two)}
      />

      <div className  = 'unit spacer'/>

      <NumberInput
        {...props}
        identifier    = 'phoneNumber3'
        value         = { props.contactMethods.phoneNumber3}
        error         = { hasValue(errors.three) }
      />

      <div className='row'>
        <ErrorLabel
          errorMessage  = { message }
          errorClass    = { addError }
        />
      </div>
      <div className='row'>
        <p className='translation-missing'>Who gets this information?</p>
        <p className='translation-missing'>Secretary of State and county election officials have access to this information</p>
      </div>
    </div>
  )
};

export default ContactDetails;
