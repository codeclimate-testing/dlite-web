'use strict';

import React            from 'react';
import { Link }         from 'react-router-dom';

import HomeLink         from '../home-link.jsx';
import ContinueButton   from '../continue-button.jsx';
import alicePath        from '../../helpers/alice-path';

const VoterPreferencesIntroPreregistered = (props) => {

  const linkAddress = '/about-me/voter/political-party-choose';

  return (
    <div>
      <HomeLink />

      <div className='voter-preferences-intro-preregistered'>
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

        <Link to={ alicePath(linkAddress) }>
          <ContinueButton disabled={props.continueDisabled} />
        </Link>

      </div>
    </div>
  );
};

export default VoterPreferencesIntroPreregistered;
