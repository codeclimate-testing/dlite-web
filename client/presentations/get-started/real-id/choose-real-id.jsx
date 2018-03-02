'use strict';

import React from 'react';

import RadioCollection        from '../../radio-selector-collection.jsx';
import radioYesNoGroup        from '../../radio-yes-no-group.jsx';
import { getCorrectString }   from '../../../helpers/data/card-type';
import translations           from '../../../i18n';
import Translation            from '../../../i18n/translate-tag.jsx';


const ChooseRealID = (props) => {
  let locale = props.locale;
  const headerTexts = {
    DL: translations[locale].intro.realIdPage.prompt.license,
    ID: translations[locale].intro.realIdPage.prompt.id,
    both: translations[locale].intro.realIdPage.prompt.card,
    CDL: 'Do you plan on using your Commercial Driver License to fly?'
  };

  let headerText = getCorrectString(props, headerTexts.DL, headerTexts.ID, headerTexts.both, headerTexts.CDL);
  let formName = getCorrectString(props, 'DL', 'ID', 'both', 'CDL');

  return (
    <div className='real-id-form'>
      <Translation tag='h2' className='question'>
        {headerText}
      </Translation>

      <Translation tag='p'>
        {translations[locale].intro.realIdPage.explanation}
      </Translation>

      <div className='row'>
        <fieldset>
          <RadioCollection
            {...props}
            name          = { formName }
            errorMessage  = { props.validations.realID() }
          >
            { radioYesNoGroup(locale) }
          </RadioCollection>
        </fieldset>

      </div>
    </div>
  )
};

export default ChooseRealID;