'use strict';

import React            from 'react';
import { hasMedical }   from '../../../helpers/data/my-history';
import Translator       from '../../../i18n/translator-tag.jsx';

const MedicalDocuments = (props) => {
  if(!hasMedical(props)) {return null;}

  return (
    <div key='medical-information-documents'>
      <Translator
        tag             = 'h4'
        className       = 'medical-information-documents'
        translationPath = 'newExtracted.conclusion.documents.medicalDocuments.title'
      />
      <Translator
        tag             = 'p'
        translationPath = 'newExtracted.conclusion.documents.medicalDocuments.explanation'
      />
    </div>
  );
};

export default MedicalDocuments;
