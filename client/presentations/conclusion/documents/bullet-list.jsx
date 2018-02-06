'use strict'

import React                    from 'react';
import { gettingRealID }        from '../../../helpers/data/real-id';
import { hasSocialSecurityYes } from '../../../helpers/data/ssn';
import { showBulletPoint }      from '../../../helpers/data/veteran';
import { hasMedical }           from '../../../helpers/data/my-history';
import { choosingReducedFee }   from '../../../helpers/data/reduced-fee';
import {
  isNewDriver,
  needsKnowledgeTest
}          from '../../../helpers/data/youth';

const RealID = (props) => {
  if (gettingRealID(props)) {
    return (<li key='real-id'>Real ID birth date, name and legal presence proof</li>);
  }
  return (<li key='legal-presence'>Legal presence</li>);
};

const SocialSecurity = (props) => {
  if (!hasSocialSecurityYes(props)) { return null; }
  return <li key='social-security' >Proof of Social Security Number</li>
};

const Residency = () => {
  return <li key='ca-residency' >California residency</li>
};

const Veteran = (props) => {
  if (!showBulletPoint(props)) { return null; }
  return <li key='proof-veteran-service' >Proof of veterans service</li>
};

const MedicalCondition = (props) => {
  if (!hasMedical(props)) { return null; }
  return <li key='medical-information' >Medical Information</li>
};

const Youth = (props) => {
  if (!isNewDriver(props)) { return null; }

  const KnowledgeTest = (props) => {
    if (!needsKnowledgeTest(props)) { return null;}
    return <li key='knowledge-test'>You will need to take a knowledge test</li>
  };

  return (
    <div>
      <li key='new-driver'>New driver requirements</li>
      <KnowledgeTest {...props} />
    </div>
  )
};

const ReducedFee = (props) => {
  if (!choosingReducedFee(props)) { return null; }
  return (
    <div>
      <li key='reduced-fee'>Reduced fee eligibility</li>
      <li key='no-fee'>No fee eligibility</li>
    </div>
  )
};

const BulletList = (props) => {
  return (
    <ul className='bullet-list'>
      <RealID {...props} />
      <SocialSecurity {...props} />
      <Residency />
      <Veteran {...props} />
      <MedicalCondition {...props} />
      <Youth {...props} />
      <ReducedFee {...props} />
    </ul>
  )
};

export default BulletList;
