'use strict'

import React from 'react';
import { ageChecks }  from '../../helpers/calculate-age';

const BulletList = (props) => {
  let now = props.now ? props.now : new Date();
  
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
  if(ageChecks.Under18(props.dateOfBirth, now)  && ageChecks.GreaterThanEqual15Half(props.dateOfBirth, now) && props.licenseIssued !== 'Yes') {
    bulletList.push(<li key='new-driver'>New driver requirements</li>);
    if(ageChecks.Under17Half(props.dateOfBirth, now) ) {
      bulletList.push(<li key='knowledge-test'>You will need to take a knowledge test</li>);
    }
  }
  if(props.reducedFee.ID === 'Yes') {
    bulletList.push(<li key='reduced-fee'>Reduced fee eligibility</li>);
    bulletList.push(<li key='no-fee'>No fee eligibility</li>);
  }

  return (
    <ul className='bullet-list'>
      { bulletList }
    </ul>
  )
};

export default BulletList;
