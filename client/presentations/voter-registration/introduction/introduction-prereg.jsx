'use strict';

import React from 'react';

import NavigationButtons      from '../../navigation-buttons.jsx';
import Page                   from '../../../containers/page.jsx';

const VoterIntroPrereg = (props) => {
  return (
    <Page
      {...props}
      sectionKey='voterPreRegistration'
    >
      <form onSubmit={props.onSubmit}>
        <div className='voter-intro-info'>
          <h5><img src='/images/stop.png' alt='Stop' /> US Citizens Only </h5>
          <h2 className='question' key='header'>Voting pre-registration</h2>
          <p>Since 1993, DMVs nationwide must help US citizens register to vote.</p>

          <ul className='bullet-list'>
            <li> If you are eligible, the California DMV will register you to vote unless you choose to opt out.</li>
            <li>You can pre-register today, so once you turn 18 you’re automatically registered to vote.</li>
          </ul>

          <hr />

          <p>
            This section takes customers<br />
            <b>3 minutes</b>
          </p>

          <NavigationButtons {...props} />
        </div>
      </form>
    </Page>
  );
};


export default VoterIntroPrereg;
