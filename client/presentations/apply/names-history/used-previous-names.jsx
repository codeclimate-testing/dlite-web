'use strict';

import React from 'react';
import SelectorCollection from '../../selector-collection.jsx';

const UsedPreviousNames = (props) => {
  return (
    <div className='previous-names-form'>
        <h4>Have you ever applied for a Driver License or ID card under a different name?</h4>
      <div className='inner-bottom'>
        <SelectorCollection
          name='hasUsedPreviousNames'
          values={['Yes', 'No']}
          onChange={ props.onChange }
          selectedValue={ props.selectedValue }
        />
      </div>
    </div>
  );
};

export default UsedPreviousNames;

