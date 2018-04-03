'use strict';

import React             from 'react';
import TextInput         from '../../text-input.jsx';
import {
  getStringByAction
}   from '../../../helpers/data/card-actions';
import Translator        from '../../../i18n/translator-tag.jsx';

const correctString = 'newExtracted.intro.getStartedPage.correction'
const updateString = 'newExtracted.intro.getStartedPage.update'

const EnterMedicalInfo = (props) => {
  if (!props.showIf) { return null; }

  let formName = props.formName ? `${props.formName}other` : 'other';
  let headerText = getStringByAction(props, null, null, null, null, updateString, correctString);

  return (
    <div className    = 'enter-other-section'>
      <hr/>
        <Translator
          tag             = 'h3'
          className       = 'question'
          translationPath = {headerText}
        />

      <TextInput
        {...props}
        identifier    = { formName }
        value         = { props.cardChanges.other }
        errorMessage  = { props.validations.other() }
      />
    </div>
  );
};

export default EnterMedicalInfo;
