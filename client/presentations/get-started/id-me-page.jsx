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
        <h2 className='question translation-missing'>The DMV is partnering with ID.me to protect your digital identity.</h2>

        <button className='ID-me green translation-missing'>Create an ID.me account</button>
        <p>Or</p>
        <button className='ID-me translation-missing'>Sign in with an ID.me account</button>

        <p>
          <b className='translation-missing'>An email address and phone number are required. </b>
          <a className='translation-missing' href='https://www.dmv.ca.gov/portal/dmv/dmv/onlinesvcs/appointment' target='_blank'>Please visit a DMV office</a> if you do not want to make an ID.me account
        </p>

        <p className='translation-missing'>
          <b>ID.me allows you to prove your legal identity. </b>
          The DMV of California has partnered with ID.me to ensure that your personal information is accurate and secure.
        </p>

        <p className='translation-missing'>The DMV of California chose to partner with ID.me because it has met rigorous requirements for security and identity-proofing.</p>

        <p><a className='translation-missing' href='https://shop.id.me/how-it-works/faq' target='_blank'>For more information, please visit ID.me</a>.</p>

        <NavigationButtons/>
      </div>
    </Page>
  );
};

export default Presentation;
