'use strict';

import React                from 'react';
import TextInput            from '../../text-input.jsx';

const EnterMedicalInfo = (props) => {
  if(props.cardChanges.sections.indexOf('other') === -1) { return null; }

  const correctHeader = 'Enter your correction below';
  const updateHeader  = 'Enter your update below';
  const headerText    = props.cardChanges.correctOrUpdate === 'correct' ? correctHeader : updateHeader;
  
  return (
    <div className    = 'enter-other-section'>
      <hr/>
      <h3 className   = 'question'>
        {headerText}
      </h3>
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
