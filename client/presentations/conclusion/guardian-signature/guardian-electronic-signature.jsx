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
  let guardianID = props.guardianID;
  const acceptLiabilityText = 'I/We accept civil liability for this minor and understand a provisional permit issued to a minor is not valid until he/she begins driver training.';
  let dateErrors = {
    month : guardianID === 0 ? props.validations.month_0() : guardianID === 1 ? props.validations.month_1() : null,
    day   : guardianID === 0 ? props.validations.day_0() : guardianID === 1 ? props.validations.day_1() : null,
    year  : guardianID === 0 ? props.validations.year_0() : guardianID === 1 ? props.validations.year_1() : null,
  };
  let dateErrorMessage = errorMessage(dateErrors);
  let addDateErrorClass = errorClass(dateErrorMessage);
  let dateErrorLabel = 'Signature Date';

  let acceptLiabilityErrors = guardianID === 0 ? props.validations.acceptLiabilities_0() :
                              guardianID === 1 ? props.validations.acceptLiabilities_1() :
                              null;
  let acceptLiabilityErrorClass = errorClass(acceptLiabilityErrors);
  let acceptLiabilityErrorLabel = 'Civil liability';

  let focusFunction = (e) => {
    props.onFocus(e);
    props.onFocusClearValidation(e);
  };

  let blurFunction = (e) => {
    props.onBlur(e);
    props.onBlurValidate(e);
  };

  return (

    <div className='electronic-signature'>
      <div className='accept-liabilities-box input-container'>
        <label
          htmlFor       = {`acceptLiabilities_${guardianID}`}
          className     = { acceptLiabilityErrorClass }
        >
          <ErrorIcon errorClass = { acceptLiabilityErrorClass } />
            {acceptLiabilityErrorLabel}
        </label>
        <fieldset>
          <CheckboxSelector
            {...props}
            name      = { `acceptLiabilities_${guardianID}` }
            value     = { `acceptLiabilities_${guardianID}` }
            selected  = { props.guardianSignature.guardianInfo[guardianID].acceptLiabilities }
            text      = { acceptLiabilityText }
            error     = { hasValue(acceptLiabilityErrors) }
            onBlur    = { blurFunction }
            onFocus   = { focusFunction }
          />
        </fieldset>
      </div>
      <div className='row'>
        <ErrorLabel
          errorClass    = { acceptLiabilityErrorClass }
          errorMessage  = { acceptLiabilityErrors }
        />
      </div>

      <div className='electronic-signature'>
        <p>Please type your name and today’s date to electronically sign.</p>

        <fieldset>
          <TextInput
          {...props}
          identifier    = { `name_${guardianID}` }
          description   = 'Parent/Guardian signature'
          value         = { props.guardianSignature.guardianInfo[guardianID].signature.name }
          errorMessage  = {
            guardianID === 0 ? props.validations.name_0() :
            guardianID === 1 ? props.validations.name_1() :
            null
          }
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
            <fieldset>
              <NumberInput
              {...props}
              identifier  = { `month_${guardianID}` }
              description = 'MM'
              value       = { props.guardianSignature.guardianInfo[guardianID].signature.month }
              error       = { hasValue(dateErrors.month) }
            />

            <div className='unit spacer' />

            <NumberInput
              {...props}
              identifier  = { `day_${guardianID}` }
              description = 'DD'
              value       = { props.guardianSignature.guardianInfo[guardianID].signature.day }
              error       = { hasValue(dateErrors.day) }
            />

            <div className='unit spacer' />

            <NumberInput
              {...props}
              identifier  = { `year_${guardianID}` }
              description = 'YYYY'
              value       = { props.guardianSignature.guardianInfo[guardianID].signature.year }
              error       = { hasValue(dateErrors.year) }
            />
            </fieldset>
            <div className='row'>
              <ErrorLabel
                errorMessage  = { dateErrorMessage }
                errorClass    = { addDateErrorClass }
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ElectronicSignature;
