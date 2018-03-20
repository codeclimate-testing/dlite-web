'use strict';

import React              from 'react';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';


const Presentation = (props) => {
  let appName = props.location.pathname.includes('id-and-license') ? 'id-and-license' : 'cdl';

  // localstorage
  localStorage.setItem('appName', appName);

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='id-me'>
        <h2 className='translation-missing'>
          The DMV is partnering with ID.me to protect your digital identity.
        </h2>

        <fieldset role='group' className='id-me-buttons' aria-label='Authentication buttons'>
          <a href='/auth/new' className='button green translation-missing id-me-create'>
            <div className='unit'>Create an </div>
            <img src='/images/id-me/white-logo.svg' alt='id.me' className='id-me-logo unit' />
            <div className='unit'> account</div>
          </a>

          <div className='or-block'>
            <hr className='mid-line'/>
            <p className='or'>Or</p>
          </div>

          <a href='/auth/new' className='button translation-missing id-me-sign-in'>
            <div className='unit'>Sign in with an </div>
            <img src='/images/id-me/dark-logo.svg' alt='id.me' className='id-me-logo unit' />
            <div className='unit'> account</div>
          </a>
        </fieldset>

        <p>
          <b className='translation-missing'>An email address and phone number are required. </b>
          <a className='translation-missing' href='https://www.dmv.ca.gov/portal/dmv/dmv/onlinesvcs/appointment' target='_blank'>Please visit a DMV office</a> if you do not want to make an ID.me account
        </p>

        <p className='translation-missing'>
          <b>ID.me allows you to prove your legal identity. </b>
          The DMV of California has partnered with ID.me to ensure that your personal information is accurate and secure.
        </p>

        <p className='translation-missing'>
          The DMV of California chose to partner with ID.me because it has met rigorous requirements for security and identity-proofing.
        </p>

        <p>
          <a className='translation-missing' href='https://shop.id.me/how-it-works/faq' target='_blank'>
            For more information, please visit ID.me
          </a>.
        </p>
      </div>
    </Page>
  );
};

export default Presentation;
