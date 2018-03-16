'use strict';

import React              from 'react';
import TextArea           from '../../text-area.jsx';
import translations       from '../../../i18n'
import Translation        from '../../../i18n/translate-tag.jsx';

const EnterMedicalInfo = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <div className='enter-medical-info'>
      <hr />
      <Translation tag='h2' className='question'>
        {translations[locale].myHistory.medicalConditionsPage.explanationPrompt}
      </Translation>
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
