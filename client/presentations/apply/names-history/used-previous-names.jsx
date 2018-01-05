'use strict';

import React                from 'react';
import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const UsedPreviousNames = (props) => {
  let values = {
    Yes: 'Yes',
    No: 'No'
  };
  return (
    <div className='previous-names-form'>
        <h4>Have you ever applied for a Driver License or ID card under a different name?</h4>
      <div className='inner-bottom'>
        <RadioCollection 
          {...props}
          name='hasUsedPreviousNames'
          text={values}
        >
          <RadioSelector 
            value='Yes'
          />
          <RadioSelector 
            value='No'
          />
        </RadioCollection>
      </div>
    </div>
  );
};

export default UsedPreviousNames;

