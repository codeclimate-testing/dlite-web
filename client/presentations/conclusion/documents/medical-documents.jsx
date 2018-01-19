'use strict';

import React from 'react';

const MedicalDocuments = (props) => {
  if(props.medicalHistory.hasMedicalCondition !== 'Yes') {return null;}

  return (
    <div key='medical-information-documents'>
      <h4 className="medical-information-documents">Medical Information</h4>
      <p>If you have a medical condition or a disability, DMV may require you to take a driving test.
      You may also have to provide a statement from your physician regarding your current health condition. </p>
    </div>
  );
};

export default MedicalDocuments;
