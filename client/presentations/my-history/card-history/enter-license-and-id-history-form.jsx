'use strict';

import React              from 'react';
import TextInput          from '../../text-input.jsx';
import ExpirationDate     from '../../expiration-date.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const EnterLicenseAndIdHistory = (props) => {

  const text = {
    DLIDNumber: <Translator tag = 'span' translationPath = 'myHistory.cardHistoryPage.numberLabel' />,
    issuedBy:   <Translator tag = 'span' translationPath = 'myHistory.cardHistoryPage.stateOrCountryLabel' />
  };

  if (!props.showIf) { return null; }

  return (
    <div className='existing-license-id-number-form'>
      <hr/>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'myHistory.cardHistoryPage.explanationPrompt'
      />

      <fieldset role='group' aria-label='Card information'>
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
