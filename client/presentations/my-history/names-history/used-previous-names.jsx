'use strict';

import React                from 'react';
import radioYesNoGroup      from '../../radio-yes-no-group.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const UsedPreviousNames = (props) => {
  return (
    <div className='previous-names-form'>
        <h2 className='question'>Have you ever applied for a Driver License or ID card under a different name?</h2>
      <div>
        <RadioCollection
          {...props}
          name='hasUsedPreviousNames'
        >
          { radioYesNoGroup() }
        </RadioCollection>
      </div>
    </div>
  );
};

export default UsedPreviousNames;

