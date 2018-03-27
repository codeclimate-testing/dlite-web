'use strict';

import React              from 'react';
import NumberInput        from '../../number-input.jsx';
import { hasValue }       from '../../../helpers/data/validations';
import Translator         from '../../../i18n/translator-tag.jsx';
import {
  ErrorIcon,
  ErrorLabel,
  errorMessage,
  errorClass
} from '../../validations.jsx';
import {
  hasSocialSecurityYes
} from '../../../helpers/data/ssn';

const Form = (props) => {
  if (!hasSocialSecurityYes(props)) { return null; }

  let errors = {
    part1 : props.validations.part1(),
    part2 : props.validations.part2(),
    part3 : props.validations.part3(),
    ssnAll : props.validations.ssnAll()
  };
  let message = errorMessage(errors);
  let addError = errorClass(message);

  return (
    <div className='social-security-enter-form'>
      <hr />
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'myBasics.socialSecurityPage.enterSocialNumber.prompt'
        />
        <Translator
          tag             = 'p'
          translationPath = 'myBasics.socialSecurityPage.enterSocialNumber.explanation'
        />

      <fieldset role='group' aria-label='Social security number'>
        <NumberInput
          {...props}
          identifier    = 'part1'
          value         = { props.socialSecurity.part1 }
          error         = { hasValue(errors.part1) }
        />

        <div className='unit social-security-dash'>-</div>

        <NumberInput
          {...props}
          identifier     = 'part2'
          value          = { props.socialSecurity.part2 }
          error          = { hasValue(errors.part2) }
        />

        <div className='unit social-security-dash'>-</div>

        <NumberInput
          {...props}
          identifier     = 'part3'
          value          = { props.socialSecurity.part3 }
          error          = { hasValue(errors.part3) }
        />
      </fieldset>

      <div><h3 className='social-security-yes-info translation-missing'>By continuing with the application you agree to the below:</h3>
        <p className='translation-missing'><b>I certify</b> (or declare) under penalty of perjury under the laws of the State of California that the motor vehicle that I am using to take the driving skills test is representative of the type of motor vehicle I expect to operate. I further certify that I am not subject to a disqualification, suspension, revocation, or cancellation as written in Title 49 of the Federal Regulations, Part 383.51, and I do not have a driver license from more than one state or jurisdiction.</p></div>

      <div className='row'>
        <ErrorLabel
          errorMessage  = { message }
          errorClass    = { addError }
        />
      </div>
    </div>
  );
};

export default Form;
