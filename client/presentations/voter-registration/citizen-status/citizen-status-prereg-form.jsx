'use strict';

import React from 'react';

import SelectorCollection from '../../selector-collection.jsx';
import Page               from '../../../containers/page.jsx';
import NavigationButtons  from '../../navigation-buttons.jsx';

const VALUES = ['Yes', 'No', 'Skip Section'];

const PreRegCitizenStatusForm = (props) => {

  return (
    <Page
      {...props}
      sectionKey='voterPreRegistration'
    >
      <div>
        <h4>Are you a United States citizen?</h4>
        <h5>If you answer No or Skip Section, you cannot pre-register to vote.</h5>
        <form onSubmit={props.onSubmit} className='citizen-status-form'>
          <div className='inner-bottom'>
            <SelectorCollection
              name='citizenStatus'
              values={VALUES}
              onChange={props.onChange}
              selectedValue={props.selectedValue}
            />
          </div>

          <NavigationButtons {...props} />
        </form>
      </div>
    </Page>
  );
};


export default PreRegCitizenStatusForm;
