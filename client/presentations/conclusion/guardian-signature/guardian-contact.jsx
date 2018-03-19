'use strict'

import React        from 'react';

import TextInput          from '../../text-input.jsx';
import AddressTemplate    from '../../address-template.jsx';


const GuardianContact = (props) => {
  const guardianID = props.guardianID;
  const phoneId = `phoneNumber_${guardianID}`;
  const phoneValue = props.guardianSignature.guardianInfo[guardianID].phoneNumber;
  const addressType = `guardian_${guardianID}`;
  const address = props.guardianSignature.guardianInfo[guardianID].address;

  return (
    <div className='guardian-contact'>
      <fieldset role='group' aria-label='Phone number'>
        <TextInput
          {...props}
          identifier  = { phoneId }
          description = 'Phone number'
          example     = '916 314 8765'
          value       = { phoneValue }
          errorMessage= { props.phoneNumber }
        />
      </fieldset>

      <fieldset role='group' aria-label='Address'>
        <AddressTemplate
          {...props}
          type          = { addressType }
          address       = { address }
        />
      </fieldset>
    </div>
  );
}

export default GuardianContact;
