'use strict';

import React          from 'react';
import TextInput      from '../../text-input.jsx';
import DateInput      from '../../date-input.jsx';

const text = {
  DLIDNumber: 'Driver license or ID card number',
  issuedBy: 'State or country card was issued',
  expiration: 'Expiration date'
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
          onBlur        = { props.onBlurValidate }
        />
      </div>
      <div id='expirationDate' className='row'>
        <DateInput
          {...props}
          description   = { text.expiration }
          values        = { props.licenseAndIdHistory }
          onBlur        = { props.onBlurValidate }
        />
      </div>
    </div>
  )
};

export default EnterLicenseAndIdHistory;
