'use strict';

import React     from 'react';
import TextArea  from '../../text-area.jsx';

const EnterMedicalInfo = (props) => {
  if (!props.showIf) { return null; }

  return (
    <div className='enter-medical-info'>
      <hr/>
      <h2 className='question'>Please explain below.</h2>
    <fieldset>
        <TextArea
          {...props}
          identifier    = 'medicalInfo'
          value         = { props.medicalHistory.medicalInfo}
          errorMessage  = { props.validations.medicalInfo() }
        />
    </fieldset>
    </div>
  );
};

export default EnterMedicalInfo;
