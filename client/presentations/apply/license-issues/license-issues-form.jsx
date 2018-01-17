'use strict';

import React                from 'react';
import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const values = {
  Yes: 'Yes',
  No: 'No'
};

const LicenseIssues = (props) => {
  
  return (
    <div className='license-issues-form'>
      <h2 className='question'>Have you ever had your driving privilege cancelled, refused, suspended, or revoked?</h2>
      <div>
        <RadioCollection 
          {...props}
          name          = 'isSuspended'
          text          = { values }
          errorMessage  = { props.validations.isSuspended() }
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

export default LicenseIssues;
