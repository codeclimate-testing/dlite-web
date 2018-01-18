'use strict';

import React        from 'react';
import TextInput    from '../../text-input.jsx';
import NumberInput  from '../../number-input.jsx';
import { hasValue } from '../../../helpers/data/validations';
import {
  ErrorIcon,
  ErrorLabel,
  errorMessage, 
  errorClass
} from '../../validations.jsx';

const ContactDetails = (props) => {

  if(props.contactMethods.shouldContact !== 'Yes') { return null; }
  
  let errors = {
    one: props.validations.phoneNumber1(),
    two: props.validations.phoneNumber2(),
    three: props.validations.phoneNumber3()
  };

  let message = errorMessage(errors);
  let addError = errorClass(message);

  return (
    <div className='contact-methods-details-form'>
      <hr/>
      <h2 className='question'>Please enter your contact information below.</h2>
      <p>This is optional</p>
      
      <TextInput
        identifier    = 'emailAddress'
        description   = 'Email address'
        example       = 'aliceball1234@gmail.com'
        value         = {props.contactMethods.emailAddress}
        errorMessage  = {props.validations.emailAddress()}
        onChange      = { props.onChange }
        onBlur        = { props.onBlur }
      />

      <label
        htmlFor       = 'phoneNumber'
        className     = { addError }
      >
        <ErrorIcon errorClass = { addError } />
        Phone number
      </label>

      <div className='row'>

        <NumberInput
          identifier    = 'phoneNumber1'
          example       = '916'
          value         = { props.contactMethods.phoneNumber1}
          error         = { hasValue(errors.one)}
          onChange      = { props.onChange }
          onBlur        = { props.onBlur }
        />

        <div className  = 'unit spacer'/>

        <NumberInput
          identifier    = 'phoneNumber2'
          example       = '314'
          value         = { props.contactMethods.phoneNumber2}
          error         = { hasValue(errors.two)}
          onChange      = { props.onChange }
          onBlur        = { props.onBlur }
        />

        <div className  = 'unit spacer'/>

        <NumberInput
          identifier    = 'phoneNumber3'
          example       = '8765'
          value         = { props.contactMethods.phoneNumber3}
          error         = { hasValue(errors.three)}
          onChange      = { props.onChange }
          onBlur        = { props.onBlur }
        />
      </div>
      <div className='row'>
        <ErrorLabel 
          errorMessage  = { message }
          errorClass    = { addError }
        />
      </div>
      <div className='row'>
        <p>Who gets this information?</p>
        <p>Secretary of State and county election officials have access to this information</p>
      </div>

    </div>
  )
};

export default ContactDetails;