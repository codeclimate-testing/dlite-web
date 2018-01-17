'use strict';

import React          from 'react';
import TextInput      from '../../text-input.jsx';
import DateInput      from '../../date-input.jsx';

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
          description = 'DRIVER LICENSE OR ID CARD NUMBER'
          value       = { props.licenseAndIdHistory.DLIDNumber }
          errorMessage = { props.validations.DLIDNumber() }
        />
      </div>

      <div className='row'>
        <TextInput
          {...props}
          identifier  = 'issuedBy'
          description = 'STATE OR COUNTRY CARD WAS ISSUED'
          value       = { props.licenseAndIdHistory.issuedBy }
          errorMessage  = { props.validations.issuedBy() }
        />
      </div>
      <div id='expirationDate' className='row'>
        <DateInput
          {...props}
          description   = 'EXPIRATION DATE'
          values        = { props.licenseAndIdHistory }
        />
      </div>
    </div>
  )
};

export default EnterLicenseAndIdHistory;
