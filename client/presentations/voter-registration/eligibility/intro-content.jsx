'use strict';

import React                from 'react';
import translations         from '../../../i18n';
import Translate            from '../../../i18n/translate-tag.jsx';
import { isPreregistering } from '../../../helpers/calculate-age';

const AgePointForPreReg = (props) => {
  let locale = props.locale;
  return (
    <li className='translation-missing'>
      I am 16 or 17 years old and would like to pre-register to vote
    </li>
  );
};

const AgePointForReg = (props) => {
  let locale = props.locale;
  return (
    <Translate tag='li'>
      { translations[locale].votingRegistration.eligibilityPage.ageStatement }
    </Translate>
  );
};

const AgePoint = (props) => {
  return isPreregistering(props.dateOfBirth) ? <AgePointForPreReg {...props}/> : <AgePointForReg {...props}/>
};

const IntroContent = (props) => {
  let locale = props.locale;
  return (
    <div className='intro-eligibility-content'>
      <Translate tag='h2' className='question'>
        { translations[locale].votingRegistration.eligibilityPage.pagePrompt }
      </Translate>

      <ul className='bullet-list'>
        <Translate tag='li'>
          { translations[locale].votingRegistration.eligibilityPage.usCitizenshipStatement }
        </Translate>
        <Translate tag='li'>
          { translations[locale].votingRegistration.eligibilityPage.caCitizenshipStatement }
        </Translate>
        <AgePoint {...props}/>
        <Translate tag='li'>
          { translations[locale].votingRegistration.eligibilityPage.convictionStatement }
        </Translate>
        <Translate tag='li'>
          { translations[locale].votingRegistration.eligibilityPage.mentalCompetenceStatement }
        </Translate>
      </ul>

      <Translate tag='p'>
        { translations[locale].votingRegistration.shared.declineToAnswerInformationRegistration }
      </Translate>
    </div>
  );
};

export default IntroContent;
