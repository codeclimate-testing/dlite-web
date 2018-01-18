'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import RadioSelector        from '../radio-selector.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import Page                 from '../../containers/page.jsx';

const values = {
  Yes: 'Yes',
  decline: 'Decline to answer'
};

const text = {
  voterPreRegistration: 'If you decline to answer, you cannot pre-register to vote.',
  voterRegistration: 'If you decline to answer, you cannot register to vote.'
};

const CitizenStatusPage = (props) => {

  return (
    <Page
      {...props}
      sectionKey={props.prereg}
    >
      <form onSubmit={props.onSubmit} className = 'citizen-status-form'>
        <h2 className='question'>Are you a United States citizen?</h2>
        <p>{text[props.prereg]}</p>
        
        <RadioCollection 
          {...props}
          name          = 'citizenStatus'
          text          = {values}
        >
          <RadioSelector 
            value='Yes'
          />
          <RadioSelector 
            value='decline'
          />
        </RadioCollection>

        <NavigationButtons {...props} />
      </form>
    </Page>
  )
};

export default CitizenStatusPage;
