'use strict';

import React from 'react';

import TextInput        from '../../text-input.jsx';
import NumberInput      from '../../number-input.jsx';

const EnterLicenseAndIdHistory = (props) => {
  if(props.licenseAndIdHistory.isIssued !== 'Yes') { return null; }

  return (
    <div className='existing-license-id-number-form'>
      <hr/>
      <h2 className='question'>Please tell us about your most recent license or ID card.</h2>
        <div className='row inner-bottom'>
          <TextInput
            identifier='DLIDNumber'
            description='DRIVER LICENSE OR ID CARD NUMBER'
            value={props.licenseAndIdHistory.DLIDNumber}
            onChange={props.onChange}
          />
        </div>

        <div className='row inner-bottom'>
          <TextInput
            identifier='issuedBy'
            description='STATE OR COUNTRY CARD WAS ISSUED'
            value={props.licenseAndIdHistory.issuedBy}
            onChange={props.onChange}
          />
        </div>

        <label htmlFor='expirationDate'> EXPIRATION DATE </label>
        <div id='expirationDate' className='row inner-bottom'>
          <NumberInput
            onChange={props.onChange}
            identifier='month'
            description='MM'
            value={props.licenseAndIdHistory.month}
          />

          <div className='unit spacer' />

          <NumberInput
            onChange={props.onChange}
            identifier='day'
            description='DD'
            value={props.licenseAndIdHistory.day}
          />

          <div className='unit spacer' />

          <NumberInput
            onChange={props.onChange}
            identifier='year'
            description='YYYY'
            value={props.licenseAndIdHistory.year}
          />
        </div>
    </div>
  )
};

export default EnterLicenseAndIdHistory;
