'use strict';

import React from 'react';

import NavigationLinks from '../navigation-links.jsx';
import Page from '../page.jsx';

const VoterIntro = (props) => {
  const linkAddress = '/voting-registration/citizenship';
  const linkBack = '/organ-donation';

  return (
    <Page
      pageTitle={props.pageTitle}
      sectionNumber='3'
      sectionName={props.sectionName}
      {...props}
    >
      <div className='voter-intro-info'>
        <h5><img src='/images/stop.png' alt='Stop' /> US Citizens Only </h5>
        <h3>Voting registration</h3>
        <h4>Since 1993, DMVs nationwide must help US citizens register to vote.</h4>

        <ul className='bullet-list'>
          <li> If you are eligible, the California DMV will register you to vote unless you choose to opt out.</li>
          <li> If you’re already registered to vote, this service helps make sure your information is up to date. </li>
        </ul>

        <hr />

        <p>This section takes customers<br />
          <b>3 minutes</b></p>

        <NavigationLinks
          forwardAddress={linkAddress}
          backwardsAddress={linkBack}
        />
      </div>
    </Page>
  );
};


export default VoterIntro;