'use strict'

import React        from 'react';

import TextInput    from '../../text-input.jsx';
import NumberInput  from '../../number-input.jsx';

const IdentityForm = (props) => {
  let guardianID = props.guardianID;
  return (
    <div className='guardian-identity'>
      <h4>Finally, please provide information from a document that can prove your identity.</h4>
      <p>Documents include: a California driver license or ID card, a passport, a consultant card, a birth certificate.</p>

      <TextInput
        {...props}
        identifier='IDNumber'
        description='Document number'
        value={props.guardianSignature.guardianInfo[guardianID].IDNumber}
      />
      <TextInput
        {...props}
        identifier='IDIssuedBy'
        description='State or agency that issued this document'
        value={props.guardianSignature.guardianInfo[guardianID].IDIssuedBy}
      />

      <div className='row inner-bottom'>
        <NumberInput
          {...props}
          identifier='IDExpirationDateMonth'
          description='MM'
          value={props.guardianSignature.guardianInfo[guardianID].IDExpirationDateMonth}
        />

        <div className='unit spacer' />

        <NumberInput
          {...props}
          identifier='IDExpirationDateDay'
          description='DD'
          value={props.guardianSignature.guardianInfo[guardianID].IDExpirationDateDay}
        />

        <div className='unit spacer' />

        <NumberInput
          {...props}
          identifier='IDExpirationDateYear'
          description='YYYY'
          value={props.guardianSignature.guardianInfo[guardianID].IDExpirationDateYear}
        />
      </div>
    </div>
  );
}

export default IdentityForm;
