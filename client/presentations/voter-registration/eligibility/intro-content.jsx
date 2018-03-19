'use strict';

import React                from 'react';
import Translator           from '../../../i18n/translator-tag.jsx';
import { isPreregistering } from '../../../helpers/calculate-age';

const AgePointForPreReg = (props) => {
  return (
    <li className='translation-missing'>
      I am 16 or 17 years old and would like to pre-register to vote
    </li>
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
