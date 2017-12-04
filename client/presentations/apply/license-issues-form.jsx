'use strict';

import React from 'react';

import SelectorCollection      from '../selector-collection.jsx';
import Page                    from '../../presentations/page.jsx';

const VALUES   = ['Yes', 'No'];
let pageTitle  = "DMV: License application - My history";

const LicenseIssues = (props) => {
  return (
    <Page
      pageTitle={pageTitle}
      sectionNumber='2'
      sectionName='My history'
      {...props}
    >
    <div className='license-issues-form'>
      <h4>Have you ever had your driving privilege cancelled, refused, suspended, or revoked?</h4>
      <div className='inner-bottom'>
          <SelectorCollection
            name='isSuspended'
            values={VALUES}
            onChange={ props.onChange }
            selectedValue={ props.selectedValue }
          />
        </div>
      </div>
    </Page>
  );
};

export default LicenseIssues;
