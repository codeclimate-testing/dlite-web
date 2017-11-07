'use strict';

import React from 'react';

import SelectorCollection      from '../selector-collection.jsx';

const VALUES = ['Yes', 'No'];

const DlidHistory = (props) => {
  return (
    <div className='has-existing-dl-id-form'>

      <h4>Have you ever had a driver license or state-issued ID card?</h4>
      <h5>The license or ID card must be issued by a U.S, state or another country. </h5>
      
        <div className='inner-bottom'>
          <SelectorCollection
            name='isIssued'
            values={VALUES}
            onChange={ props.onChange }
            selectedValue={ props.selectedValue }
          />
        </div>
   </div>
  );
};

export default DlidHistory;
