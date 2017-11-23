'use strict';

import React            from 'react';

import HomeLink           from '../home-link.jsx';
import LinkButton         from '../link-button.jsx';
import alicePath          from '../../helpers/alice-path';

const VoterRegComplete = (props) => {

  const linkAddress = '/summary';
  const linkBack = '/voting-registration/contact-methods';
  let pageTitle  = 'DMV: License application - Voting registration'
  document.title = pageTitle;
  return (
    <div>
      <HomeLink />
      <h3>3 &raquo; Voting registration</h3>
      <hr></hr>

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
  );
};

export default VoterRegComplete;
