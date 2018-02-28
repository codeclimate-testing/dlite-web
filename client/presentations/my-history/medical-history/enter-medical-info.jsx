'use strict';

import React              from 'react';
import TextArea           from '../../text-area.jsx';
import translations       from '../../../i18n'
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const EnterMedicalInfo = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <div className='enter-medical-info'>
      <hr />
      {convertToHtml('h2', translations[locale].myHistory.medicalConditionsPage.explanationPrompt, 'question')}
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
