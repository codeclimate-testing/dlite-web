'use strict';

import React            from 'react';
import NumberInput      from '../../number-input.jsx';
import { hasValue }     from '../../../helpers/data/validations';
import {
  ErrorIcon,
  ErrorLabel,
  errorMessage,
  errorClass
} from '../../validations.jsx';

const Form = (props) => {
  let errors = {
    ssnFirstSegment : props.validations.ssnFirstSegment(),
    ssnSecondSegment : props.validations.ssnSecondSegment(),
    ssnThirdSegment : props.validations.ssnThirdSegment(),
    ssnAll : props.validations.ssnAll()
  };
  let message = errorMessage(errors);
  let addError = errorClass(message);

  if(props.socialSecurity.hasSocialSecurity !== 'Yes') { return null; }

  return (
    <div className='social-security-enter-form'>
      <hr/>
      <h2 className='question'>What’s your Social Security Number?</h2>
      <p>Example: 123 - 45 - 6789</p>

      <div className='row'>
        <NumberInput
          {...props}
          identifier    = 'part1'
          description   = ''
          value         = { props.socialSecurity.part1 }
          error         = { hasValue(errors.ssnFirstSegment) }
          onChange      = { props.onChange }
          onBlurValidate = { props.onBlurValidate }
          onFocusClearValidation = { props.onFocusClearValidation }
        />

        <div className='unit social-security-dash'>-</div>

        <NumberInput
          {...props}
          identifier     = 'part2'
          description    = ''
          value          = { props.socialSecurity.part2 }
          error          = { hasValue(errors.ssnSecondSegment) }
          onChange       = { props.onChange }
          onBlurValidate = { props.onBlurValidate }
          onFocusClearValidation = { props.onFocusClearValidation }
        />

        <div className='unit social-security-dash'>-</div>

        <NumberInput
          {...props}
          identifier     = 'part3'
          description    = ''
          value          = { props.socialSecurity.part3 }
          error          = { hasValue(errors.ssnThirdSegment) }
          onChange       = { props.onChange }
          onBlurValidate = { props.onBlurValidate }
          onFocusClearValidation = { props.onFocusClearValidation }
        />

      </div>
      <ErrorLabel
        errorMessage  = { message }
        errorClass    = { addError }
      />
    </div>
  );
};

export default Form;
