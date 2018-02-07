'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import translations       from '../../../i18n'
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const MedicalCondition = (props) => {
  return (
    <div className='medical-condition-form'>
      {convertToHtml('h2', translations.myHistory.medicalConditionsPage.pagePrompt, 'question')}
      <div>
        <fieldset>
          <RadioCollection
            {...props}
            name  = 'hasMedicalCondition'
            errorMessage = { props.validations.hasMedicalCondition() }
          >
            { radioYesNoGroup() }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default MedicalCondition;
