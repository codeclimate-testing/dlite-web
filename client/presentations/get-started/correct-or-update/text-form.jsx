'use strict';

import React                from 'react';
import TextInput            from '../../text-input.jsx';
import {
  getStringByAction
}   from '../../../helpers/data/card-actions';

const correctString = 'Enter your correction below';
const updateString = 'Enter your udpate below';

const EnterMedicalInfo = (props) => {
  if (!props.showIf) { return null; }

  let formName = props.formName ? `${props.formName}other` : 'other';
  let headerText = getStringByAction(props, null, null, null, null, updateString, correctString);

  return (
    <div className    = 'enter-other-section'>
      <hr/>
      <h3 className   = 'question translation-missing'>{headerText}</h3>

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
