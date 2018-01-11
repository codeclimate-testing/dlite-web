'use strict';

import React from 'react';

import RadioSelector      from '../../radio-selector.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import Page               from '../../../containers/page.jsx';
import NavigationButtons  from '../../navigation-buttons.jsx';

const values = {
  Yes: 'Yes',
  decline: 'Decline to answer'
};

const CitizenStatusForm = (props) => {

  return (
    <Page
      {...props}
      sectionKey='voterRegistration'
    >
      <div>
        <h2 className='question'>Are you a United States citizen?</h2>
        <p>If you decline to answer, you cannot register to vote.</p>
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
                value='decline'
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
