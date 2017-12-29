'use strict';

import React     from 'react';
import TextArea  from '../../text-area.jsx';

const EnterMedicalInfo = (props) => {
  if(props.medicalHistory.hasMedicalCondition !== 'Yes') { return null; }
  return (
    <div className='enter-medical-info'>
      <h4>Please explain below.</h4>
        <TextArea
          identifier='medicalInfo'
          value={props.medicalHistory.medicalInfo}
          onChange={props.onChange}
        />
    </div>
  );
};

export default EnterMedicalInfo;
