'use strict';

import React            from 'react';
import { hasMedical }   from '../../../helpers/data/my-history';

const MedicalDocuments = (props) => {
  if(!hasMedical(props)) {return null;}

  return (
    <div key='medical-information-documents'>
      <h4 className="medical-information-documents translation-missing">Medical Information</h4>
      <p>If you have a medical condition or a disability, DMV may require you to take a driving test.
      You may also have to provide a statement from your physician regarding your current health condition. </p>
    </div>
  );
};

export default MedicalDocuments;
