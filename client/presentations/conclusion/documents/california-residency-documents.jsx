'use strict';

import React from 'react';
import Translator         from '../../../i18n/translator-tag.jsx';

const CaliforniaResidencyDocuments = (props) => {
  const caResidencyList = 'https://www.dmv.ca.gov/portal/dmv/detail/dl/dl_info#Residency%20Documents';

  return (
    <div key='california-residency-documents'>
      <Translator
        tag             = 'h4'
        className       = 'california-residency-documents'
        translationPath = 'applicationPreparationPage.noRealIdSection.californiaResidency.header'
      />
      <Translator
        tag             = 'p'
        translationPath = 'applicationPreparationPage.noRealIdSection.californiaResidency.body'
      />
    </div>
  );
};

export default CaliforniaResidencyDocuments;
