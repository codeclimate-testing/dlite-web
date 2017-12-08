'use strict';

import React            from 'react';

import HomeLink         from '../home-link.jsx';
import NavigationLinks  from '../navigation-links.jsx';
import Page             from '../page.jsx';

const linkAddress = '/voting-registration/choose-party';
const linkBack =  '/voting-registration/opt-out';
let pageTitle = 'DMV: License application - Voting registration'

const VoterPreferencesIntro = (props) => {
  
  let documentHeader = [];
  let documentDescription = [];
  let documentStatement = [];

  if((props.dateOfBirth.age > 15 ) && (props.dateOfBirth.age < 18)) {
    documentHeader.push(
      'Voting pre-registration'
    );
  }
  else {
    documentHeader.push(
      'Voting registration'
    );
  }
  
  if((props.optOut === "I am already registered to vote in California") || (props.optOut === "I am already pre-registered to vote in California")) {
    documentDescription.push(
      'Next we\'d like to make sure your voter registration is up to date.'
    )
    documentStatement.push(
      'This will replace your previous voter preferences.'
    );
  }
  else {
    documentDescription.push(
      'Next we\'d like to make sure your voter registration is up to date.'
    );
  }

  return (
    <Page
      pageTitle= { pageTitle }
      sectionNumber='3'
      sectionName= { documentHeader }
      {...props}
    >
      <div>
        <div className='voter-preferences-intro'>
          <h4> { documentDescription } </h4>
          <p> { documentStatement } </p>

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

export default VoterPreferencesIntro;
