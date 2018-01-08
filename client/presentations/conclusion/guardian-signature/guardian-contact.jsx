'use strict'

import React        from 'react';

import TextInput          from '../../text-input.jsx';
import AddressTemplate    from '../../address-template.jsx';


const GuardianContact = (props) => {
  let guardianID = props.guardianID;
  return (
    <div className='guardian-contact'>
      <TextInput
        {...props}
        identifier='phoneNumber'
        description='Phone number'
        example='916 314 8765'
        value={props.guardianSignature.guardianInfo[guardianID].phoneNumber}
        onChange={props.onChange}
      />
      <AddressTemplate
        {...props}
        type='guardian'
        address={ props.guardianSignature.guardianInfo[guardianID]}
      />
    </div>
  );
}

export default GuardianContact;