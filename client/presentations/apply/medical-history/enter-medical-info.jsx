'use strict';

import React     from 'react';
import TextArea  from '../../text-area.jsx';

const EnterMedicalInfo = (props) => {
  if(props.medicalHistory.hasMedicalCondition !== 'Yes') { return null; }
  return (
    <div className='enter-medical-info'>
      <hr/>
      <h2 className='question'>Please explain below.</h2>
        <TextArea
          identifier='medicalInfo'
          value={props.medicalHistory.medicalInfo}
          onChange={props.onChange}
        />
    </div>
  );
};

export default EnterMedicalInfo;
