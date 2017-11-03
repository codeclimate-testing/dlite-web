'use strict';

import React     from 'react';
import TextInput from '../text-input.jsx';

const EnterPreviousNames = (props) => {
  return (
    <div className='enter-previous-names'>
      <h4>Please list all previous legal names.</h4>
      <p>For example, inclue your maiden name.</p>
      <p>Separate by commas.</p>
        <TextInput
          identifier='previousNames'
          description='Previous Names:'
          value={props.namesHistory.previousNames}
          onChange={props.onChange}
        />
    </div>
  );
};

export default EnterPreviousNames;
