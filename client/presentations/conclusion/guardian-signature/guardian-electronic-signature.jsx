'use strict'

import React        from 'react';

import CheckboxSelector   from '../../checkbox-selector.jsx';
import TextInput          from '../../text-input.jsx';
import NumberInput        from '../../number-input.jsx';
import { hasValue }       from '../../../helpers/data/validations';
import {
  ErrorIcon,
  ErrorLabel,
  errorMessage,
  errorClass
} from '../../validations.jsx';

const ElectronicSignature = (props) => {
  const guardianID = props.guardianID;
  const acceptLiabilityText = 'I/We accept civil liability for this minor and understand a provisional permit issued to a minor is not valid until he/she begins driver training.';

  let dateErrorMessage = errorMessage(props.validations.date);
  let addDateErrorClass = errorClass(dateErrorMessage);
  let dateErrorLabel = 'Signature Date';

  let acceptLiabilityErrorClass = errorClass(props.validations.acceptLiabilities);
  let acceptLiabilityErrorLabel = 'Civil liability';

  const liabilityID = `acceptLiabilities_${guardianID}`;

  const guarianIdentifierFor = (name) => {
    return `${name}_${guardianID}`;
  };

  return (

    <div className='electronic-signature'>
      <div className='accept-liabilities-box input-container'>
        <label
          htmlFor       = { liabilityID }
          className     = { acceptLiabilityErrorClass }
        >
          <ErrorIcon errorClass = { acceptLiabilityErrorClass } />
          {acceptLiabilityErrorLabel}
        </label>
        <fieldset role='group' aria-label='Accept liability choice'>
          <CheckboxSelector
            {...props}
            name      = { liabilityID }
            value     = { liabilityID }
            selected  = { props.guardianSignature.guardianInfo[guardianID].acceptLiabilities }
            text      = { acceptLiabilityText }
            error     = { hasValue(props.validations.acceptLiabilityErrors) }
            onBlur    = { props.onCheckboxBlur }
            onFocus   = { props.onCheckboxFocus}
            className = 't-size-1-1'
          />
        </fieldset>
        <ErrorLabel
          errorClass    = { acceptLiabilityErrorClass }
          errorMessage  = { props.validations.acceptLiabilities }
        />
      </div>

      <div className='electronic-signature'>
        <p>Please type your name and today’s date to electronically sign.</p>

        <fieldset role='group' aria-label='Guardian electronic signature'>
          <TextInput
            {...props}
            identifier    = { guarianIdentifierFor('name') }
            description   = 'Parent/Guardian signature'
            value         = { props.guardianSignature.guardianInfo[guardianID].signature.name }
            errorMessage  = { props.validations.name }
          />
        </fieldset>

        <div className='date-input'>
          <label
            htmlFor       = 'electronic-signature-date'
            className     = { addDateErrorClass }
          >
            <ErrorIcon errorClass = { addDateErrorClass } />
            {dateErrorLabel}
          </label>
          <div className  = 'electronic-signature-date'>
            <fieldset role='group' aria-label='Date'>
              <NumberInput
                {...props}
                identifier  = { guarianIdentifierFor('month') }
                example     = 'MM'
                value       = { props.guardianSignature.guardianInfo[guardianID].signature.month }
                error       = { hasValue(props.validations.date.month) }
              />

              <div className='unit spacer' />

              <NumberInput
                {...props}
                identifier  = { guarianIdentifierFor('day') }
                example     = 'DD'
                value       = { props.guardianSignature.guardianInfo[guardianID].signature.day }
                error       = { hasValue(props.validations.date.day) }
              />

              <div className='unit spacer' />

              <NumberInput
                {...props}
                identifier  = { guarianIdentifierFor('year') }
                example     = 'YYYY'
                value       = { props.guardianSignature.guardianInfo[guardianID].signature.year }
                error       = { hasValue(props.validations.date.year) }
              />
              <ErrorLabel
                errorMessage  = { dateErrorMessage }
                errorClass    = { addDateErrorClass }
              />
            </fieldset>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ElectronicSignature;
