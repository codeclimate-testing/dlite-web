'use strict';

import React            from 'react';
import * as dataPresent from '../../helpers/data-present';

const Type = (props) => {
  if (!dataPresent.hasValues(props.types)) { return null; }

  let types = [];
  props.types.forEach(function(type) {
    switch(type) {
      case 'car':
        types.push('Car');
        break;
      case 'cycle':
        types.push('Motorcycle or scooter');
        break;
      case 'trailer':
        types.push('5th wheel or livestock trailer');
        break;
      case 'long':
        types.push('Housecar over 45 feet or trailer over 25 feet');
        break;
      case 'unsure':
        types.push("I'm not sure");
        break;
    }
  });

  return (
    <p>Need to drive: {types.join(', and ')}</p>
  )
};

const Endorsement = (props) => {

  let endorsements = props.licenseType.needEndorsement === 'Yes' ? props.licenseType.endorsement.join(' and ') : 'not needed';
  return (
    <p>Endorsements: {endorsements}</p>
  )
};

const LicenseType = (props) => {
  if (!dataPresent.licenseType(props.licenseType)) { return null; }
  
  return (
    <div className='summary-section license-type'>
      <Type types={ props.licenseType.type } />
      <Endorsement licenseType={ props.licenseType } />   
    </div>
  );

};

export default LicenseType;
