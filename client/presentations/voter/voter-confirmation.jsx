'use strict';

import React            from 'react';

import NavigationLinks    from '../navigation-links.jsx';
import Page               from '../page.jsx';

const linkAddress = '/summary';
const linkBack = '/voting-registration/contact-methods';

const VoterRegComplete = (props) => {

  return (
    <Page
      pageTitle={props.pageTitle}
      sectionNumber='3'
      sectionName={props.sectionName}
      {...props}
    >
      <div>
        <div className='voter-reg-complete'>
          <h4>Thank you, your voter registration application will be processed when
          you complete your business at the DMV</h4>

          <p>If you do not receive a voter notification card within four weeks after
          your visit to the DMV, contact your county elections official.</p>

          <p>You can check your voter registration status with the California Secretary
          of State at <a href="https://voterstatus.sos.ca.gov/">https://voterstatus.sos.ca.gov/</a></p>

          <NavigationLinks
            forwardAddress={linkAddress}
            backwardsAddress={linkBack}
          />
        </div>
      </div>
    </Page>
  );
};

export default VoterRegComplete;
