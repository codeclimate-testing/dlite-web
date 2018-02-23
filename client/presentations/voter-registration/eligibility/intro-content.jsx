'use strict';

import React                from 'react';
import translations         from '../../../i18n';
import Translate            from '../../../i18n/translate-tag.jsx';
import { isPreregistering } from '../../../helpers/calculate-age';

const AgePointForPreReg = () => {
  return (
    <li className='translation-missing'>
      I am 16 or 17 years old and would like to pre-register to vote
    </li>
  );
};

const AgePointForReg = () => {
  return (
    <Translate tag='li'>
      { translations.votingRegistration.eligibilityPage.ageStatement }
    </Translate>
  );
};

const AgePoint = (props) => {
  return isPreregistering(props.dateOfBirth) ? <AgePointForPreReg /> : <AgePointForReg />
};

const IntroContent = (props) => {
  return (
    <div className='intro-eligibility-content'>
      <Translate tag='h2' className='question'>
        { translations.votingRegistration.eligibilityPage.pagePrompt }
      </Translate>

      <ul className='bullet-list'>
        <Translate tag='li'>
          { translations.votingRegistration.eligibilityPage.usCitizenshipStatement }
        </Translate>
        <Translate tag='li'>
          { translations.votingRegistration.eligibilityPage.caCitizenshipStatement }
        </Translate>
        <AgePoint {...props}/>
        <Translate tag='li'>
          { translations.votingRegistration.eligibilityPage.convictionStatement }
        </Translate>
        <Translate tag='li'>
          { translations.votingRegistration.eligibilityPage.mentalCompetenceStatement }
        </Translate>
      </ul>

      <Translate tag='p'>
        { translations.votingRegistration.shared.declineToAnswerInformationRegistration }
      </Translate>
    </div>
  );
};

export default IntroContent;
