'use strict';

import React              from 'react';
import TextArea           from '../../text-area.jsx';
import translations       from '../../../i18n'
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const EnterMedicalInfo = (props) => {
  if (!props.showIf) { return null; }

  return (
    <div className='enter-medical-info'>
      <hr />
      {convertToHtml('h2', translations.myHistory.medicalConditionsPage.explanationPrompt, 'question')}
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
