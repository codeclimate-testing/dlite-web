'use strict';

import React from 'react';

import NavigationLinks from '../navigation-links.jsx';
import Page from '../page.jsx';

const linkAddress = '/voting-registration/choose-party';
const linkBack = '/voting-registration/opt-out';

const PreRegVoterPreferencesIntroUpdated = (props) => {

  return (
    <Page
      pageTitle={props.pageTitle}
      sectionNumber='3'
      sectionName={props.sectionName}
      {...props}
    >
      <div>
        <div className='voter-preferences-intro'>
          <h4>Next we'd like to make sure your voter pre-registration is up to date.</h4>
          <p>This will replace your previous voter preferences.</p>

          <h4>Political Party</h4>
          <p>Choose your political party preferences.</p>

          <h4>Vote by mail</h4>
          <p>You can get your ballot in the mail for all future elections, meaning you don't have to go to a polling place to vote.</p>

          <h4>Language</h4>
          <p>Choose what language you would like to get your election guide in.</p>

          <h4>Contact Information</h4>
          <p>Election officials can contact you with election and voting information.</p>

          <NavigationLinks
            forwardAddress={linkAddress}
            backwardsAddress={linkBack}
          />
        </div>
      </div>
    </Page>
  );
};

export default PreRegVoterPreferencesIntroUpdated;
