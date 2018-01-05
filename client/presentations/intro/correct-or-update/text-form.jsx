'use strict';

import React     from 'react';
import TextArea  from '../../text-area.jsx';

const EnterMedicalInfo = (props) => {
  if(props.cardChanges.sections.indexOf('other') === -1) { return null; }

  const correctHeader = 'Enter your correction below';
  const updateHeader  = 'Enter your update below';
  const headerText    = props.cardChanges.correctOrUpdate === 'correct' ? correctHeader : updateHeader;
  return (
    <div className='enter-other-section'>
      <h4>{headerText}</h4>
        <TextArea
          identifier='other'
          value={props.cardChanges.other}
          onChange={props.onChange}
        />
    </div>
  );
};

export default EnterMedicalInfo;