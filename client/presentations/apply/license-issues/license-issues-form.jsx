'use strict';

import React                from 'react';
import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const LicenseIssues = (props) => {
  let values = {
    Yes: 'Yes',
    No: 'No'
  };

  return (
    <div className='license-issues-form'>
      <h4>Have you ever had your driving privilege cancelled, refused, suspended, or revoked?</h4>
      <div className='inner-bottom'>
        <RadioCollection 
          {...props}
          name='isSuspended'
          text={values}
        >
          <RadioSelector
            value='Yes'
          />
          <RadioSelector
            value={'No'}
          />
        </RadioCollection>
      </div>
    </div>
  );
};

export default LicenseIssues;
