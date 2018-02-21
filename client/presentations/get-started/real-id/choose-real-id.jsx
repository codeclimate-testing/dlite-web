'use strict';

import React from 'react';

import RadioCollection        from '../../radio-selector-collection.jsx';
import radioYesNoGroup        from '../../radio-yes-no-group.jsx';
import { getCorrectString }   from '../../../helpers/data/card-type';
import translations           from '../../../i18n';
import { convertToHtml }      from '../../../i18n/convert-to-html.jsx';

const headerTexts = {
  DL: convertToHtml('h2', translations.intro.realIdPage.prompt.license, 'question'),
  ID: convertToHtml('h2', translations.intro.realIdPage.prompt.id, 'question'),
  both: convertToHtml('h2', translations.intro.realIdPage.prompt.card, 'question')
};

const ChooseRealID = (props) => {
  let headerText = getCorrectString(props, headerTexts.DL, headerTexts.ID, headerTexts.both);

  return (
    <div className='real-id-form'>
      {headerText}

      {convertToHtml('p', translations.intro.realIdPage.explanation)}

      <div className='row'>
        <fieldset>
          <RadioCollection
            {...props}
            name          = {`getRealID-${props.formName}`}
            errorMessage  = { props.validations.realID() }
          >
            { radioYesNoGroup() }
          </RadioCollection>
        </fieldset>

      </div>
    </div>
  )
};

export default ChooseRealID;
