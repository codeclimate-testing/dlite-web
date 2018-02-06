'use strict'

import React        from 'react';

import TextInput          from '../../text-input.jsx';
import AddressTemplate    from '../../address-template.jsx';


const GuardianContact = (props) => {
  let guardianID = props.guardianID;
  return (
    <div className='guardian-contact'>
      <fieldset>
        <TextInput
          {...props}
          identifier  = {`phoneNumber_${guardianID}`}
          description = 'Phone number'
          example     = '916 314 8765'
          value       = {props.guardianSignature.guardianInfo[guardianID].phoneNumber}
          errorMessage= {props.phoneNumber}
        />
      </fieldset>

      <fieldset>
      <AddressTemplate
        {...props}
        type          = {`guardian_${guardianID}`}
        address       = { props.guardianSignature.guardianInfo[guardianID].address}
      />
      </fieldset>
    </div>
  );
}

export default GuardianContact;