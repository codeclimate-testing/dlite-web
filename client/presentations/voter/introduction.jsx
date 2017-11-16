'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import HomeLink from '../home-link.jsx';
import alicePath from '../../helpers/alice-path';

const VoterIntro = (props) => {
  const linkAddress = '/voting-registration/citizenship';
  const linkBack = '/organ-donation';
  let pageTitle = 'DMV: License application - Voting registration'
  document.title = pageTitle;

  return (
    <div>
      <HomeLink />
      <h3>3 &raquo; Voting Registration</h3>
      <hr></hr>

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

        <div className='shadow-container'>
          <Link to={alicePath(linkAddress)} className='link-button button'>Continue</Link><br /><Link to={alicePath(linkBack)} className='back link-button button'>Back</Link>
        </div>

      </div>
    </div>
  );
};

export default VoterIntro;
