'use strict';

import React from 'react';

import NavigationButtons      from '../../navigation-buttons.jsx';
import Page                   from '../../../containers/page.jsx';

const VoterIntro = (props) => {
  return (
    <Page
      {...props}
      sectionKey='voterRegistration'
    >
      <form onSubmit={props.onSubmit}>
        <div className='voter-intro-info'>
          <h5><img src='/images/stop.png' alt='Stop' /> US Citizens Only </h5>
          <h2 className='question'>Voting registration</h2>
          <p>Since 1993, DMVs nationwide must help US citizens register to vote.</p>

          <ul className='bullet-list'>
            <li> If you are eligible, the California DMV will register you to vote unless you choose to opt out.</li>
            <li> If you’re already registered to vote, this service helps make sure your information is up to date. </li>
          </ul>

          <hr />

          <p>This section takes customers<br />
            <b>3 minutes</b></p>

          <NavigationButtons {...props} />
        </div>
      </form>
    </Page>
  );
};


export default VoterIntro;
