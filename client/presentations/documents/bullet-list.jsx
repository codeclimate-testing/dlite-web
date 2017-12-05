'use strict'

import React from 'react';

const BulletList = (props) => {
  let bulletList = [];
  if(props.realID.getRealID === 'Yes') {
    bulletList.push(<li key='real-id'>Real ID birth date, name and legal presence proof</li>);
  } else {
    bulletList.push(<li key='legal-presence'>Legal presence</li>);
  }
  if(props.socialSecurity.hasSocialSecurity === 'Yes') {
    bulletList.push(<li key='social-security' >Proof of Social Security Number</li>);
  }
  bulletList.push(<li key='ca-residency' >California residency</li>);
  if(props.veteransService.isVeteran === 'Yes' && props.veteransService.veteransIdentifier === 'Yes') {
    bulletList.push(<li key='proof-veteran-service' >Proof of veterans service</li>);
  }
  if(props.medicalHistory.hasMedicalCondition === 'Yes') {
    bulletList.push(<li key='medical-information' >Medical Information</li>);
  }

  return (
    <ul className='bullet-list'>
      { bulletList }
    </ul>
  )
};

export default BulletList;
