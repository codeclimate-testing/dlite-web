'use strict'

import React        from 'react';

import TextInput          from '../../text-input.jsx';
import NumberInput        from '../../number-input.jsx';
import { hasValue }       from '../../../helpers/data/validations';
import {
  ErrorIcon,
  ErrorLabel,
  errorMessage,
  errorClass
} from '../../validations.jsx';

const IdentityForm = (props) => {
  let guardianID = props.guardianID;

  let message = errorMessage(props.validations.date);
  let addError = errorClass(message);
  let errorLabel = 'Expiration date';

  return (
    <div className='guardian-identity'>
      <h2 className='question'>Finally, please provide information from a document that can prove your identity.</h2>
      <p>Documents include: a California driver license or ID card, a passport, a consultant card, a birth certificate.</p>

      <fieldset>
        <TextInput
          {...props}
          identifier    = {`number_${guardianID}`}
          description   = 'Document number'
          value         = {props.guardianSignature.guardianInfo[guardianID].ID.number}
          errorMessage  = {props.validations.number}
        />
        <TextInput
          {...props}
          identifier    = {`issuedBy_${guardianID}`}
          description   = 'State or agency that issued this document'
          value         = {props.guardianSignature.guardianInfo[guardianID].ID.issuedBy}
          errorMessage  = {props.validations.issuedBy}
        />
      </fieldset>

      <div className='date-input'>
        <label
          htmlFor       = 'expiration-date'
          className     = { addError }
        >
          <ErrorIcon errorClass= { addError } />
          {errorLabel}
        </label>

        <div className='expiration-date'>
          <fieldset>
            <NumberInput
              {...props}
              identifier={`expirationMonth_${guardianID}`}
              description='MM'
              value={props.guardianSignature.guardianInfo[guardianID].ID.expirationMonth}
              error={ hasValue(props.validations.date.month) }
            />

            <div className='unit spacer' />

            <NumberInput
              {...props}
              identifier={`expirationDay_${guardianID}`}
              description='DD'
              value={props.guardianSignature.guardianInfo[guardianID].ID.expirationDay}
              error={ hasValue(props.validations.date.day) }
            />

            <div className='unit spacer' />

            <NumberInput
              {...props}
              identifier={`expirationYear_${guardianID}`}
              description='YYYY'
              value={props.guardianSignature.guardianInfo[guardianID].ID.expirationYear}
              error={ hasValue(props.validations.date.year) }
            />
          </fieldset>
          <ErrorLabel
            errorMessage  = { message }
            errorClass    = { addError }
          />
        </div>
      </div>
    </div>
  );
}

export default IdentityForm;
