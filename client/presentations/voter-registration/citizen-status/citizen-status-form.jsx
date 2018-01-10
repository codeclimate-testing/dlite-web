'use strict';

import React from 'react';

import RadioSelector      from '../../radio-selector.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import Page               from '../../../containers/page.jsx';
import NavigationButtons  from '../../navigation-buttons.jsx';

const values = {
  Yes: 'Yes',
  null: 'Decline to answer'
};

const CitizenStatusForm = (props) => {

  return (
    <Page
      {...props}
      sectionKey='voterRegistration'
    >
      <div>
        <h4>Are you a United States citizen?</h4>
        <h5>If you decline to answer, you cannot register to vote.</h5>
        <form onSubmit={props.onSubmit} className='citizen-status-form'>
          <div className='inner-bottom'>
            <RadioCollection  
              {...props}
              name='citizenStatus'
              text={values}
            >
              <RadioSelector
                value='Yes'
              />
              <RadioSelector
                value='null'
              />
            </RadioCollection>
          </div>

          <NavigationButtons {...props} />
        </form>
      </div>
    </Page>
  );
};


export default CitizenStatusForm;
