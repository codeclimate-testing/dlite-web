'use strict';

import React from 'react';

import SelectorCollection      from '../selector-collection.jsx';
import Page                    from '../page.jsx';

const VALUES   = ['Yes', 'No'];
const onlyID = <div className="applying-for-only-id"><h4>Have you ever had a California driver license or ID card?</h4></div>
const IDAndDL = <div className="applying-for-dl"><h4>Have you ever had a driver license or state-issued ID card?</h4>
                <h5>The license or ID card must be issued by a U.S, state or another country.</h5></div>
let licenseAndIdHeader = '';
let pageTitle  = "DMV: License application - My history";

const LicenseAndIdHistory = (props) => {
  if (props.cardType.ID && !props.cardType.DL) {
    licenseAndIdHeader = onlyID;
  } else {
    licenseAndIdHeader = IDAndDL;
  }

  return (
    <Page
      pageTitle={pageTitle}
      sectionNumber='2'
      sectionName='My history'
      {...props}
    >
      <div className='license-and-id-history-form'>
      { licenseAndIdHeader }

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
