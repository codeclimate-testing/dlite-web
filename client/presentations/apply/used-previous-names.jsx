'use strict';

import React from 'react';
import SelectorCollection from '../selector-collection.jsx';
import Page               from '../../presentations/page.jsx';

const values = ['Yes', 'No'];

let pageTitle = "DMV: License application - My history";

const UsedPreviousNames = (props) => {
  return (
    <Page
      pageTitle={pageTitle}
      sectionNumber='2'
      sectionName='My history'
      {...props}
    >
      <div className='previous-names'>
        <h4>Have you ever applied for a Driver License or ID card under a different name?</h4>
          <div className='inner-bottom'>
            <SelectorCollection
              name='hasUsedPreviousNames'
              values={values}
              onChange={ props.onChange }
              selectedValue={ props.selectedValue }
            />
          </div>
      </div>
    </Page>
  );
};

export default UsedPreviousNames;
