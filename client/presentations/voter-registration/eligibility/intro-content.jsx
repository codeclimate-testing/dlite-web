'use strict';

import React                from 'react';
import Translator           from '../../../i18n/translator-tag.jsx';
import { isPreregistering } from '../../../helpers/calculate-age';

const AgePointForPreReg = (props) => {
  return (
    <Translator
      tag             = 'li'
      translationPath = 'newApproved.votingRegistration.eligibilityPage.preRegEligible'
    />
  );
};

const AgePointForReg = (props) => {
  return (
    <Translator
      tag             = 'li'
      translationPath = 'votingRegistration.eligibilityPage.ageStatement'
    />
  );
};

const AgePoint = (props) => {
  return isPreregistering(props.dateOfBirth) ? <AgePointForPreReg {...props}/> : <AgePointForReg {...props}/>
};

const IntroContent = (props) => {
  return (
    <div className='intro-eligibility-content'>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'votingRegistration.eligibilityPage.pagePrompt'
        tabIndex        = '0'
      />

      <ul className='bullet-list'>
        <Translator
          tag             = 'li'
          translationPath = 'votingRegistration.eligibilityPage.usCitizenshipStatement'
        />
        <Translator
          tag             = 'li'
          translationPath = 'votingRegistration.eligibilityPage.caCitizenshipStatement'
        />
        <AgePoint {...props}/>
        <Translator
          tag             = 'li'
          translationPath = 'votingRegistration.eligibilityPage.convictionStatement'
        />
        <Translator
          tag             = 'li'
          translationPath = 'votingRegistration.eligibilityPage.mentalCompetenceStatement'
        />
      </ul>

      <Translator
        tag             = 'p'
        translationPath = 'votingRegistration.shared.declineToAnswerInformationRegistration'
      />
    </div>
  );
};

export default IntroContent;
