'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import HomeLink from '../home-link.jsx';
import ContinueButton from '../continue-button.jsx';
import alicePath from '../../helpers/alice-path';

const VoterIntro = (props) => {
  const linkAddress = '/about-me/voter/am-citizen';

  return (
    <div>
      <HomeLink />

      <div className='voter-intro-info'>

        <h5><img src='/images/stop.png' alt='Stop' /> US Citizens Only </h5>

        <h3>Voter Registration</h3>

        <h4>Since 1993, DMVs nationwide must help US citizens register to vote.</h4>

        <ul className='bullet-list'>
          <li> If you are eligible, the California DMV will register you to vote unless you choose to opt out.</li>
          <li>If you’re already registered to vote, this service helps make sure your information is up to date.</li>
        </ul>

        <hr />

        <p>This section takes customers<br />
        <b>3 minutes</b></p>

        <Link to={alicePath(linkAddress)}>
          <ContinueButton disabled={props.continueDisabled} />
        </Link>

      </div>
    </div>
  );
};

export default VoterIntro;
