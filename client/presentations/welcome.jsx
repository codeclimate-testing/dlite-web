'use strict';

import React            from 'react';
import HomeLink         from './home-link.jsx';
import alicePath        from './../helpers/alice-path';
import LinkButton  from './link-button.jsx';
import navigateOnSubmit     from '../helpers/handlers/navigate-on-submit';

const Welcome = (props) => {
  const linkAddress = '/my-basics/legal-name';
  return (
    <div>
      <HomeLink />
      <div className='welcome-page'>
        <h2>Welcome!</h2>
        <p>On this website, you can:</p>
        <ul className='bullet-list'>
          <li>Apply for a driver license or ID card.</li>
          <li>Renew or replace your card.</li>
          <li>Make a change or correction to your card</li>
        </ul>
        <p>In order to complete this form from home, you will need to create an account. We'll walk you through the process.</p>
        <p>If you are in a confidential address program or in Safe at Home, please do not use this form. Make an <a target="_blank" href="https://www.dmv.ca.gov/portal/dmv/dmv/onlinesvcs/appointment">appointment</a> and visit your local DMV office.</p>
      </div>
      <div className='shadow-container unit-right' >
        <LinkButton
          to={linkAddress}
          linkText='Next'
          className='forward'
        />
      </div>
    </div>
    )
};

export default Welcome;
