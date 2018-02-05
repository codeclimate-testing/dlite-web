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
import {
  hasSocialSecurityYes
} from '../../../helpers/data/ssn';
import translations     from '../../../i18n';

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

  let translationPath = translations.myBasics.socialSecurityPage.enterSocialNumber;

  return (
    <div className='social-security-enter-form'>
      <hr />
      <h2 className='question'>{translationPath.prompt}</h2>
      <p>{translationPath.explanation}</p>

      <fieldset>
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
