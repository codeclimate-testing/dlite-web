'use strict';

import React            from 'react';
import { Link }         from 'react-router-dom';

import HomeLink         from '../home-link.jsx';
import ContinueButton   from '../continue-button.jsx';
import alicePath        from '../../helpers/alice-path';

const VoterRegComplete = (props) => {

  const linkAddress = '/about-me/organ';

  return (
    <div>
      <HomeLink />

      <div className='voter-reg-complete'>
        <h4>Thank you, your voter registration application will be processed when
        you complete your business at the DMV</h4>

        <p>If you do not receive a voter notification card within four weeks after
        your visit to the DMV, contact your county elections official.</p>

        <p>You can check your voter registration status with the California Secretary
        of State at <a href="https://voterstatus.sos.ca.gov/">https://voterstatus.sos.ca.gov/</a></p>

        <Link to={ alicePath(linkAddress) } className='link-button'>
          <ContinueButton disabled={props.continueDisabled} />
        </Link>

      </div>
    </div>
  );
};

export default VoterRegComplete;
