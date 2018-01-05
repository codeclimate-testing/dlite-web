'use strict';

import React     from 'react';
import TextArea  from '../../text-area.jsx';

const EnterPreviousNames = (props) => {
  if(props.namesHistory.hasUsedPreviousNames !== 'Yes') { return null; }
  return (
    <div className='enter-previous-names'>
      <h4>Please list all previous legal names.</h4>
      <p>For example, include your maiden name.</p>
      <p>Separate by commas.</p>
        <TextArea
          identifier='previousNames'
          description='Previous Names:'
          value={props.namesHistory.previousNames}
          onChange={props.onChange}
        />
    </div>
  );
};

export default EnterPreviousNames;

