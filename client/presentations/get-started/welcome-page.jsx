'use strict';

import React            from 'react';
import Page             from '../../containers/page.jsx';
import LinkButton       from '../link-button.jsx';
import MessageBox       from '../message-box.jsx';

const Welcome = (props) => {
  const linkAddress = '/my-basics/legal-name';
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='welcome-page what-you-can-do-page'>
        <h2 className='question'>Welcome!</h2>
        <p>On this website, you can:</p>
        <ul>
          <li className='translation-missing'>
            <div className='unit icon card new'/>
            <b>Apply</b> for a driver license or ID card.
          </li>
          <li className='translation-missing'>
            <div className='unit icon card renew'/>
            <b>Renew or replace</b> your card.
          </li>
          <li className='translation-missing'>
            <div className='unit icon card change'/>
            <b>Correct or update</b> your card.
          </li>
        </ul>
        <p>
          In order to complete this form from home, you will need to create an account.
          We'll walk you through the process.
        </p>

        <MessageBox className='info'>
          <p>
            If you are in a confidential address program or in Safe at Home,
            please do not use this form.
            Make an <a target="_blank" href="https://www.dmv.ca.gov/portal/dmv/dmv/onlinesvcs/appointment">appointment</a> 
            and visit your local DMV office.
          </p>
        </MessageBox>

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
