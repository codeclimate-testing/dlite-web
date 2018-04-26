'use strict';

import React from 'react';

import RadioCollection        from '../../radio-selector-collection.jsx';
import radioYesNoGroup        from '../../radio-yes-no-group.jsx';
import { getCorrectString }   from '../../../helpers/data/card-type';
import Translator             from '../../../i18n/translator-tag.jsx';


const ChooseRealID = (props) => {
  const headerTexts = {
    DL:   'intro.realIdPage.prompt.license',
    ID:   'intro.realIdPage.prompt.id',
    both: 'intro.realIdPage.prompt.card',
    //TODO: Translation Key
    CDL: 'intro.realIdPage.prompt.cdl'
  };

  let headerText  = getCorrectString(props, headerTexts.DL, headerTexts.ID, headerTexts.both, headerTexts.CDL);
  let formName    = getCorrectString(props, 'DL', 'ID', 'both', 'CDL');

  return (
    <div className='real-id-form'>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = { headerText }
        tabIndex        = '0'
      />

      <Translator
        tag             = 'p'
        translationPath = 'intro.realIdPage.explanation'
      />

      <div className='row'>
        <fieldset role='group' aria-label='Real ID choice'>
          <RadioCollection
            {...props}
            name          = { formName }
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
