'use strict';

import React                  from 'react';

import NavigationButtons      from '../../navigation-buttons.jsx';
import Page                   from '../../../containers/page.jsx';

const VoterRegComplete = (props) => {

  return (
     <Page
      {...props}
      sectionKey='voterRegistration'
    >

      <form onSubmit={props.onSubmit}>
        <div className='voter-reg-complete'>
          <h4>Thank you, your voter registration application will be processed when
          you complete your business at the DMV</h4>

          <p>If you do not receive a voter notification card within four weeks after
          your visit to the DMV, contact your county elections official.</p>

          <p>You can check your voter registration status with the California Secretary
          of State at <a href="https://voterstatus.sos.ca.gov/">https://voterstatus.sos.ca.gov/</a></p>

          <NavigationButtons { ...props } />

        </div>
      </form>
    </Page>
  );
};

export default VoterRegComplete;
