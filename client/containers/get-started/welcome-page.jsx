'use strict';

import React            from 'react';
import Page             from '../page.jsx';
import LinkButton       from '../../presentations/link-button.jsx';

const Welcome = (props) => {
  const linkAddress = '/my-basics/legal-name';
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='welcome-page'>
        <h2 className='question'>Welcome!</h2>
        <p>On this website, you can:</p>
        <ul className='bullet-list'>
          <li>Apply for a driver license or ID card.</li>
          <li>Renew or replace your card.</li>
          <li>Make a change or correction to your card</li>
        </ul>
        <p>In order to complete this form from home, you will need to create an account. We'll walk you through the process.</p>
        <p>If you are in a confidential address program or in Safe at Home, please do not use this form. Make an <a target="_blank" href="https://www.dmv.ca.gov/portal/dmv/dmv/onlinesvcs/appointment">appointment</a> and visit your local DMV office.</p>
        <div className='navigation-buttons row'>
          <hr />

          <div className='shadow-container unit-right' >
            <LinkButton
              to={linkAddress}
              linkText='Next'
              className='forward'
            />
          </div>
        </div>
      </div>
    </Page>
  )
};

export default Welcome;
