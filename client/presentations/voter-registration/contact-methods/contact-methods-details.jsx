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
import { convertToHtml }    from '../../../i18n/convert-to-html.jsx';

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
      {convertToHtml('h2', translations.votingRegistration.contactInfoPage.pagePrompt, 'question')}
      <p className='translation-missing'>This is optional</p>

      <fieldset>
        <TextInput
          {...props}
          identifier='emailAddress'
          description={translations.votingRegistration.contactInfoPage.emailLabel}
          example={translations.votingRegistration.contactInfoPage.emailExample}
          value={props.contactMethods.emailAddress}
          errorMessage={props.validations.emailAddress()}
        />

      <label
        htmlFor       = 'phoneNumber'
        className     = { addError }
      >
        <ErrorIcon errorClass = { addError } />
        {convertToHtml('p', translations.votingRegistration.contactInfoPage.phoneLabel)}
      </label>
        <ExampleLabel
          example={translations.votingRegistration.contactInfoPage.phoneExample}

        />

        <NumberInput
          {...props}
          identifier='phoneNumber1'
          value={props.contactMethods.phoneNumber1}
          error={hasValue(errors.one)}
        />
        <div className='unit spacer' />

        <NumberInput
          {...props}
          identifier='phoneNumber2'
          value={props.contactMethods.phoneNumber2}
          error={hasValue(errors.two)}
        />

        <div className='unit spacer' />

        <NumberInput
          {...props}
          identifier='phoneNumber3'
          value={props.contactMethods.phoneNumber3}
          error={hasValue(errors.three)}
        />
      </fieldset>

      <div className='row'>
        <ErrorLabel
          errorMessage  = { message }
          errorClass    = { addError }
        />
      </div>
    </div>
  )
};

export default ContactDetails;
