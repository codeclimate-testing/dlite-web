'use strict';

import React              from 'react';
import TextInput          from '../../text-input.jsx';
import ExpirationDate     from '../../expiration-date.jsx';
import translations       from '../../../i18n'
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const EnterLicenseAndIdHistory = (props) => {
  let locale = props.locale;
  const text = {
    DLIDNumber: translations[locale].myHistory.cardHistoryPage.numberLabel,
    issuedBy:   translations[locale].myHistory.cardHistoryPage.stateOrCountryLabel
  };

  if (!props.showIf) { return null; }
  return (
    <div className='existing-license-id-number-form'>
      <hr/>
      {convertToHtml('h2', translations[locale].myHistory.cardHistoryPage.explanationPrompt, 'question')}

      <fieldset>
        <TextInput
        {...props}
        identifier    = 'DLIDNumber'
        description   = { text.DLIDNumber }
        value         = { props.licenseAndIdHistory.DLIDNumber }
        errorMessage  = { props.validations.DLIDNumber() }
      />

      <TextInput
        {...props}
        identifier    = 'issuedBy'
        description   = { text.issuedBy }
        value         = { props.licenseAndIdHistory.issuedBy }
        errorMessage  = { props.validations.issuedBy() }
      />

      <ExpirationDate
        {...props}
        values        = { props.licenseAndIdHistory }
      />
      </fieldset>
    </div>
  )
};

export default EnterLicenseAndIdHistory;
