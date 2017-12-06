'use strict';

import React            from 'react';

import HomeLink           from '../home-link.jsx';
import LinkButton         from '../link-button.jsx';
import Page               from '../page.jsx';
import alicePath          from '../../helpers/alice-path';

const linkAddress = '/summary';
const linkBack = '/voting-registration/contact-methods';
let pageTitle  = 'DMV: License application - Voting registration'

const VoterRegComplete = (props) => {
  let documentHeader = [];

  if ((props.dateOfBirth.age > 15 ) && (props.dateOfBirth.age < 18)) {
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

          <LinkButton
            to={linkBack}
            className='back'
            linkText='Back' />

          <div className='unit spacer' />

          <LinkButton
            to={linkAddress}
            className='continue'
            linkText='Continue' />
        </div>
      </div>
    </Page>
  );
};

export default VoterRegComplete;
