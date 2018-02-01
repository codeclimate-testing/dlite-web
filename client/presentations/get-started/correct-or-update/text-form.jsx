'use strict';

import React                from 'react';
import TextInput            from '../../text-input.jsx';
import { SubQuestionHeader }from '../../question-header.jsx';
import {
  isCorrecting,
  isUpdating
}   from '../../../helpers/data/card-actions';

const EnterMedicalInfo = (props) => {
  if (!props.showIf) { return null; }

  return (
    <div className    = 'enter-other-section'>
      <hr/>
      <SubQuestionHeader
        showIf        = { isCorrecting(props) }
        text          = 'Enter your correction below'
        translationMissing = {true}
      />
      <SubQuestionHeader
        showIf        = { isUpdating(props) }
        text          = 'Enter your update below'
        translationMissing = {true}
      />
      <TextInput
        {...props}
        identifier    = 'other'
        value         = { props.cardChanges.other }
        errorMessage  = { props.validations.other() }
      />
    </div>
  );
};

export default EnterMedicalInfo;
