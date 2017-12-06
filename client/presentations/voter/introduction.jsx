'use strict';

import React from 'react';

import HomeLink        from '../home-link.jsx';
import LinkButton      from '../link-button.jsx';
import SectionHeader   from '../section-header.jsx';
import alicePath       from '../../helpers/alice-path';
import Page            from '../page.jsx';

const VoterIntro = (props) => {

  const linkAddress = '/voting-registration/citizenship';
  const linkBack = '/organ-donation';
  let pageTitle = 'DMV: License application - Voting registration'
  document.title = pageTitle;

  let documentHeader = [];
  let bulletList = [];

  if ((props.dateOfBirth.age > 15 ) && (props.dateOfBirth.age < 18)) {
    documentHeader.push(
      'Voting pre-registration'
    )
    bulletList.push(<li key='pre-register' >You can pre-register today, so once you turn 18 you’re automatically registered to vote.</li>
    );
  }
  else {
    documentHeader.push(
      'Voting registration'
    )
    bulletList.push(<li key='register' >If you’re already registered to vote, this service helps make sure your information is up to date.</li>
    );
  }

  return (
    <Page
      pageTitle={ pageTitle }
      sectionNumber='3'
      sectionName={ documentHeader }
      {...props} 
    >
      <div>
        <div className='voter-intro-info'>
        <h5><img src='/images/stop.png' alt='Stop' /> US Citizens Only </h5>
          <h3 key='header'>{ documentHeader }</h3>
          <h4>Since 1993, DMVs nationwide must help US citizens register to vote.</h4>

          <ul className='bullet-list'>
            <li> If you are eligible, the California DMV will register you to vote unless you choose to opt out.</li>
            { bulletList }
          </ul>

          <hr />

          <p>This section takes customers<br />
            <b>3 minutes</b></p>

          <LinkButton
            to={ linkAddress }
            className='continue'
            linkText='Continue' />

            <div className='unit spacer' />

            <LinkButton
            to={ linkBack }
            className='back'
            linkText='Back' />

        </div>
        </div>
    </Page>
  );
};


export default VoterIntro;