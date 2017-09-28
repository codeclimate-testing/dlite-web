'use strict';

import React            from 'react';

import HomeLink         from '../home-link.jsx';
import ContinueButton   from '../continue-button.jsx';
import alicePath        from '../../helpers/alice-path';

const VoterPreferencesIntro = (props) => {

  const linkAddress = '/about-me/voter/political-party';

  return (
    <div>
      <HomeLink />

      <div className='voter-preferences-intro'>
        <h4>We will now ask for your preferences on the following voter registration details:</h4>
        <h4>Political Party</h4>
        <p>You can become a member of a political party or change your party membership.</p>
        <h4>Vote by mail</h4>
        <p>Choose if you want to get your ballot by mail.<br />
          You can always change your mind and vote at a polling place.</p>
        <h4>Language</h4>
        <p>Choose what language you would like to get your voting materials in.</p>
        <h4>Contact Information</h4>
        <p>How would you like election campaigns to reach you — if at all?</p>

        <a href={alicePath(linkAddress)} >
          <ContinueButton disabled={props.continueDisabled} />
        </a>
      </div>
    </div>
  );
};

export default VoterPreferencesIntro;