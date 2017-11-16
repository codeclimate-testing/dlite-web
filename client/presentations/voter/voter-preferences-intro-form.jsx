'use strict';

import React            from 'react';
import { Link }         from 'react-router-dom';

import HomeLink         from '../home-link.jsx';
import ContinueButton   from '../continue-button.jsx';
import alicePath        from '../../helpers/alice-path';

const VoterPreferencesIntro = (props) => {
  const linkAddress = '/voting-registration/choose-party';
  const linkBack =  '/voting-registration/opt-out';
  let pageTitle  = 'DMV: License application - Voting registration'
  document.title = pageTitle;

  return (
    <div>
      <HomeLink />
      <h3>3 &raquo; Voting Registration</h3>
      <hr></hr>

      <div className='voter-preferences-intro'>
        <h4>Next you will choose your voter preferences.</h4>

        <h4>Political Party</h4>
        <p>Choose your political party preferences.</p>

        <h4>Vote by mail</h4>
        <p>You can get your ballot in the mail for all future elections, meaning you don't have to go to a polling place to vote.</p>

        <h4>Language</h4>
        <p>Choose what language you would like to get your election guide in.</p>

        <h4>Contact Information</h4>
        <p>Election officials can contact you with election and voting information.</p>

        <div className='shadow-container'>
          <Link to={alicePath(linkAddress)} className='link-button button'>Continue</Link><br /><Link to={alicePath(linkBack)} className='back link-button button'>Back</Link>
        </div>

      </div>
    </div>
  );
};

export default VoterPreferencesIntro;
