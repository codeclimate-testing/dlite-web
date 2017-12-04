'use strict';

import React from 'react';

import SelectorCollection      from '../selector-collection.jsx';
import Page                    from '../page.jsx';

const VALUES   = ['Yes', 'No'];
let pageTitle  = "DMV: License application - My history";

const LicenseAndIdHistory = (props) => {
  return (
    <Page
      pageTitle={pageTitle}
      sectionNumber='2'
      sectionName='My history'
      {...props}
    >
      <div className='license-and-id-history-form'>

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
   </Page>
  );
};

export default LicenseAndIdHistory;
