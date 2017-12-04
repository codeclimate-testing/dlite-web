'use strict';

import React from 'react';
import SelectorCollection from '../selector-collection.jsx';
import Page               from '../../presentations/page.jsx';

const values = ['Yes', 'No'];

let pageTitle = "DMV: License application - My history";

const MedicalCondition = (props) => {
  return (
    <Page
      pageTitle={pageTitle}
      sectionNumber='2'
      sectionName='My history'
      {...props}
    >
      <div className='medical-info'>
        <h4>Have you had any medical conditions in the last three years that affected your ability to drive?</h4>
          <div className='inner-bottom'>
            <SelectorCollection
              name='hasMedicalCondition'
              values={values}
              onChange={ props.onChange }
              selectedValue={ props.selectedValue }
            />
          </div>
      </div>
    </Page>
  );
};

export default MedicalCondition;
