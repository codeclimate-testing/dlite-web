'use strict';

import React                from 'react';
import radioYesNoGroup      from '../../radio-yes-no-group.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const LicenseIssues = (props) => {
  return (
    <div className='license-issues-form'>
      <h2 className='question'>Have you ever had your driving privilege cancelled, refused, suspended, or revoked?</h2>
      <div>
        <fieldset>
        <RadioCollection
          {...props}
          name          = 'isSuspended'
          errorMessage  = { props.validations.isSuspended() }
        >
          { radioYesNoGroup() }
        </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default LicenseIssues;
