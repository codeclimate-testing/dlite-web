'use strict';

import React                from 'react';
import SelectorCollection   from '../../selector-collection.jsx';

const LicenseIssues = (props) => {
  return (
    <div className='license-issues-form'>
      <h4>Have you ever had your driving privilege cancelled, refused, suspended, or revoked?</h4>
      <div className='inner-bottom'>
        <SelectorCollection
          name='isSuspended'
          values={['Yes', 'No']}
          onChange={ props.onChange }
          selectedValue={ props.selectedValue }
        />
      </div>
    </div>
  );
};

export default LicenseIssues;
