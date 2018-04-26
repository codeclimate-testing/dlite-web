'use strict';

import React              from 'react';
import TextArea           from '../../text-area.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const EnterMedicalInfo = (props) => {
  if (!props.showIf) { return null; }
  return (
    <div className='enter-medical-info'>
      <hr />
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'myHistory.medicalConditionsPage.explanationPrompt'
        tabIndex        = '0'
      />
      <fieldset role='group' aria-label='Medical conditions'>
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
