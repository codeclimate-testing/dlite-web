'use strict';

import React            from 'react';

import NavigationLinks    from '../navigation-links.jsx';
import Page               from '../page.jsx';
import { getCurrentAge, getAgeGroup }     from '../../helpers/calculate-age';

const linkAddress = '/summary';
const linkBack = '/voting-registration/contact-methods';
let pageTitle  = 'DMV: License application - Voting registration'

const VoterRegComplete = (props) => {
  let documentHeader = [];
  let ageGroup = getAgeGroup(props.dateOfBirth.age);

  if (ageGroup === "YOUTH_GREATER_THAN_15_AND_LESS_THAN_18") {
    documentHeader.push(
      'Voting pre-registration'
    );
  }
  else {
    documentHeader.push(
      'Voting registration'
    );
  }
  return (
    <Page
      pageTitle={ pageTitle }
      sectionNumber='3'
      sectionName={ documentHeader }
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
