'use strict';

import React            from 'react';

import HomeLink         from '../home-link.jsx';
import LinkButton       from '../link-button.jsx';
import ContinueButton   from '../continue-button.jsx';
import alicePath        from '../../helpers/alice-path';

const VoterPreferencesIntroUpdated = (props) => {
  
  const linkAddress = '/voting-registration/choose-party';
  const linkBack = '/voting-registration/opt-out';
  let pageTitle = 'DMV: License application - Voting registration'
  document.title = pageTitle;

  return (
    <div>
      <HomeLink />
      <h3>3 &raquo; Voting registration</h3>
      <hr></hr>

      <div className='updating-voter-preferences'>
        <h4>Next we'd like to make sure your voter registration is up to date.</h4>
        <p>This will replace your previous voter preferences.</p>
        <h4>Political Party</h4>
        <p>Choose your political party preference.</p>
        <h4>Vote by mail</h4>
        <p>You can get your ballot in the mail for all future elections, meaning you don't
        have to go to a polling place to vote.</p>
        <h4>Language</h4>
        <p>Choose what language you would like to get your election guide in.</p>
        <h4>Contact Information</h4>
        <p>Election officials can contact you with election and voting information.</p>

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

export default VoterPreferencesIntroUpdated;
