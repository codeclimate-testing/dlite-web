'use strict';

import React from 'react';

import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';

const Presentation = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='id-me'>
        <h2 className='question'>The DMV is partnering with ID.me to protect your digital identity.</h2>

        <button className='ID-me green'>Create an ID.me account</button>
        <p>Or</p>
        <button className='ID-me'>Sign in with an ID.me account</button>

        <p>
          <b>An email address and phone number are required. </b>
          <a href='https://www.dmv.ca.gov/portal/dmv/dmv/onlinesvcs/appointment' target='_blank'>Please visit a DMV office</a> if you do not want to make an ID.me account
        </p>

        <p>
          <b>ID.me allows you to prove your legal identity. </b>
          The DMV of California has partnered with ID.me to ensure that your personal information is accurate and secure.
        </p>

        <p>The DMV of California chose to partner with ID.me because it has met rigorous requirements for security and identity-proofing.</p>

        <p><a href='https://shop.id.me/how-it-works/faq' target='_blank'>For more information, please visit ID.me</a>.</p>

        <NavigationButtons/>
      </div>
    </Page>
  );
};

export default Presentation;
