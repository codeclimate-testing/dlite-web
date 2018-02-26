'use strict';

import React from 'react';

import RadioCollection        from '../../radio-selector-collection.jsx';
import radioYesNoGroup        from '../../radio-yes-no-group.jsx';
import { getCorrectString }   from '../../../helpers/data/card-type';
import translations           from '../../../i18n';
import { convertToHtml }      from '../../../i18n/convert-to-html.jsx';

const ChooseRealID = (props) => {
  let locale = props.locale;
  const headerTexts = {
    DL: convertToHtml('h2', translations[locale].intro.realIdPage.prompt.license, 'question'),
    ID: convertToHtml('h2', translations[locale].intro.realIdPage.prompt.id, 'question'),
    both: convertToHtml('h2', translations[locale].intro.realIdPage.prompt.card, 'question')
  };

  let headerText = getCorrectString(props, headerTexts.DL, headerTexts.ID, headerTexts.both);
  let formName = getCorrectString(props, 'DL', 'ID', 'both');

  return (
    <div className='real-id-form'>
      {headerText}

      {convertToHtml('p', translations[locale].intro.realIdPage.explanation)}

      <div className='row'>
        <fieldset>
          <RadioCollection
            {...props}
            name          = { formName}
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
