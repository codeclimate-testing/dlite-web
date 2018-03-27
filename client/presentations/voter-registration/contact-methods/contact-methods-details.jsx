'use strict';

import React              from 'react';
import TextInput          from '../../text-input.jsx';
import NumberInput        from '../../number-input.jsx';
import { hasValue }       from '../../../helpers/data/validations';
import Translator         from '../../../i18n/translator-tag.jsx';
import ExampleLabel       from '../../example-label.jsx';
import {
  ErrorIcon,
  ErrorLabel,
  errorMessage,
  errorClass
} from '../../validations.jsx';

const ContactDetails = (props) => {

  if(props.contactMethods.shouldContact !== 'Yes') { return null; } let errors = {
    one:    props.validations.phoneNumber1(),
    two:    props.validations.phoneNumber2(),
    three:  props.validations.phoneNumber3()
  };

  let message   = errorMessage(errors);
  let addError  = errorClass(message);

  return (
    <div className='contact-methods-details-form'>
      <hr/>
      <Translator
        tag               = 'h2'
        className         = 'question'
        translationPath   = 'votingRegistration.contactInfoPage.pagePrompt'
      />

      <p className='translation-missing'>This is optional</p>

      <fieldset role='group' aria-label='Contact methods'>
        <TextInput
          {...props}
          identifier    = 'emailAddress'
          example       = 'votingRegistration.contactInfoPage.emailExample'
          value         = { props.contactMethods.emailAddress }
          errorMessage  = { props.validations.emailAddress() }
        >
          <Translator
            tag               = 'span'
            translationPath   = 'votingRegistration.contactInfoPage.emailLabel'
          />
        </TextInput>

        <div className='text-input-block input-margin-bottom'>

          <label
            htmlFor       = 'phoneNumber'
            className     = { addError }
          >
            <Translator
              tag               = 'div'
              className         = 'unit'
              translationPath   = 'votingRegistration.contactInfoPage.phoneLabel'
            />
            <ErrorIcon
              errorClass = { addError }
            />
          </label>

          <ExampleLabel>
            <Translator
              tag               = 'span'
              translationPath   = 'votingRegistration.contactInfoPage.phoneExample'
            />
          </ExampleLabel>

          <div className='input-container flexPhone'>

            <NumberInput
              {...props}
              identifier  = 'phoneNumber1'
              value       = { props.contactMethods.phoneNumber1 }
              error       = { hasValue(errors.one)  }
            />
            <div className='unit spacer' />
            <NumberInput
              {...props}
              identifier  = 'phoneNumber2'
              value       = { props.contactMethods.phoneNumber2 }
              error       = { hasValue(errors.two)  }
            />
            <div className='unit spacer' />
            <NumberInput
              {...props}
              identifier  = 'phoneNumber3'
              value       = { props.contactMethods.phoneNumber3 }
              error       = { hasValue(errors.three)  }
            />
          </div>
          <ErrorLabel
            errorMessage  = { message }
            errorClass    = { addError }
          />
        </div>

      </fieldset>
    </div>
  )
};

export default ContactDetails;
