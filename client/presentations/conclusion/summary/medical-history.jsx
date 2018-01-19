'use strict';

import React from 'react';
import * as dataPresent from '../../../helpers/data-present';

const MedicalHistory = (props) => {
  let hasMedicalCondition = props.medicalHistory.hasMedicalCondition;
   if (!(dataPresent.hasMedicalCondition(props.medicalHistory))) { return null; }

  if(hasMedicalCondition === 'No') {
    return (
      <div className='summary-section'>
        <p> Medical history: {hasMedicalCondition} </p>
      </div>
    );
  }

  return (
    <div className='summary-section'>
      <p> Medical history: {hasMedicalCondition} </p>
      <p> Medical conditions: {props.medicalHistory.medicalInfo} </p>
    </div>
  );
};

export default MedicalHistory;
