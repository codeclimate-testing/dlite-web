'use strict';

import React          from 'react';
import TextInput      from '../../text-input.jsx';
import ExpirationDate from '../../expiration-date.jsx';

const text = {
  DLIDNumber: 'Driver license or ID card number',
  issuedBy: 'State or country card was issued'
};

const EnterLicenseAndIdHistory = (props) => {
  if(props.licenseAndIdHistory.isIssued !== 'Yes') { return null; }

  return (
    <div className='existing-license-id-number-form'>
      <hr/>
      <h2 className     = 'question'>Please tell us about your most recent license or ID card.</h2>
      <div className='row'>
        <TextInput
          {...props}
          identifier  = 'DLIDNumber'
          description = { text.DLIDNumber }
          value       = { props.licenseAndIdHistory.DLIDNumber }
          errorMessage = { props.validations.DLIDNumber() }
        />
      </div>

      <div className='row'>
        <TextInput
          {...props}
          identifier  = 'issuedBy'
          description = { text.issuedBy }
          value       = { props.licenseAndIdHistory.issuedBy }
          errorMessage  = { props.validations.issuedBy() }
        />
      </div>
      <ExpirationDate
          {...props}
          values      = { props.licenseAndIdHistory }
      />
    </div>
  )
};

export default EnterLicenseAndIdHistory;
