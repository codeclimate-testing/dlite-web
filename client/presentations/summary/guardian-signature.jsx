'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const GuardianSignature = (props) => {

  let isSigned = props.guardianSignature.isSigned;
  if (!dataPresent.value(isSigned)) { return null; }

  if(isSigned === 'No') {
    return (
      <div className='summary-section'>
        <p> Parent/guardian available: {isSigned} </p>
      </div>
    );
  }

  let guardianInfoFirst = props.guardianSignature.guardianInfo[0];
  let guardianInfoSecond = props.guardianSignature.guardianInfo[1];
  let content = [];

  content.push(
    <div className='summary-section' key='guardian-first-info'>
      <p> Parent/guardian available: {isSigned} </p>
      <hr/>
      <p> Guardian First </p>
      <p> Accept Liabilities: {guardianInfoFirst.acceptLiabilities ? 'Yes' : 'No'} </p>
      <p> Signature: {guardianInfoFirst.signature} </p>
      <p> Signature month: {guardianInfoFirst.signatureDateMonth} </p>
      <p> Signature day: {guardianInfoFirst.signatureDateDay} </p>
      <p> Signature year: {guardianInfoFirst.signatureDateYear} </p>
      <p> Phone number: {guardianInfoFirst.phoneNumber} </p>
      <p>Street Address: {guardianInfoFirst.guardianStreet_1}</p>
      <p>Apartment or Unit Number: {guardianInfoFirst.guardianStreet_2}</p>
      <p>City: {guardianInfoFirst.guardianCity}</p>
      <p>State: {guardianInfoFirst.guardianState}</p>
      <p>Zip: {guardianInfoFirst.guardianZip}</p>
      <p> ID number: {guardianInfoFirst.IDNumber} </p>
      <p> ID issued by: {guardianInfoFirst.IDIssuedBy} </p>
      <p> ID expiration month: {guardianInfoFirst.IDExpirationDateMonth} </p>
      <p> ID expiration day: {guardianInfoFirst.IDExpirationDateDay} </p>
      <p> ID expiration year: {guardianInfoFirst.IDExpirationDateYear} </p>
    </div>
  );

  if(guardianInfoSecond.acceptLiabilities) {
    content.push(
      <div className='summary-section' key='guardian-second-info'>
        <hr/>
        <p> Guardian Second </p>
        <p> Accept Liabilities: {guardianInfoSecond.acceptLiabilities ? 'Yes' : 'No'} </p>
        <p> Signature: {guardianInfoSecond.signature} </p>
        <p> Signature month: {guardianInfoSecond.signatureDateMonth} </p>
        <p> Signature day: {guardianInfoSecond.signatureDateDay} </p>
        <p> Signature year: {guardianInfoSecond.signatureDateYear} </p>
        <p> Phone number: {guardianInfoSecond.phoneNumber} </p>
        <p>Street Address: {guardianInfoSecond.guardianStreet_1}</p>
        <p>Apartment or Unit Number: {guardianInfoSecond.guardianStreet_2}</p>
        <p>City: {guardianInfoSecond.guardianCity}</p>
        <p>State: {guardianInfoSecond.guardianState}</p>
        <p>Zip: {guardianInfoSecond.guardianZip}</p>
        <p> ID number: {guardianInfoSecond.IDNumber} </p>
        <p> ID issued by: {guardianInfoSecond.IDIssuedBy} </p>
        <p> ID expiration month: {guardianInfoSecond.IDExpirationDateMonth} </p>
        <p> ID expiration day: {guardianInfoSecond.IDExpirationDateDay} </p>
        <p> ID expiration year: {guardianInfoSecond.IDExpirationDateYear} </p>
      </div>
    );
  }

  return content;

};

export default GuardianSignature;