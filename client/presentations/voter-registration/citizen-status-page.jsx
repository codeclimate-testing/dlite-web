'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import RadioSelector        from '../radio-selector.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import Accordion            from '../../containers/accordion.jsx';
import RegIntro             from './introduction/introduction.jsx';
import PreRegIntro          from './introduction/introduction-prereg.jsx';
import Page                 from '../../containers/page.jsx';
import translations         from '../../i18n';
import { checkPreReg }      from '../../helpers/data/youth';
import { isPreregistering } from '../../helpers/calculate-age';
import Translate            from '../../i18n/translate-tag.jsx';

const declineStatement = (props) => {
  let translation = translations.votingRegistration.shared;

  if (isPreregistering(props.dateOfBirth)) {
    translation = translation.declineToAnswerInformationPreRegistration;
  } else {
    translation = translation.declineToAnswerInformationRegistration;
  }

  return translation;
};

const VoterIntro = (props) => {
  return isPreregistering(props.dateOfBirth) ? <PreRegIntro /> : <RegIntro />;
};

const CitizenStatusPage = (props) => {
  let showPreReg = isPreregistering(props.dateOfBirth);

  return (
    <Page
      {...props}
      sectionKey={checkPreReg(props.dateOfBirth)}
    >
     <VoterIntro {...props} />

     <hr />

     <form onSubmit={props.onSubmit} className = 'citizen-status-form'>
        <Translate tag='h2' className='question'>
          { translations.votingRegistration.citizenshipPage.pagePrompt }
        </Translate>

        <Translate tag='p'>
          { declineStatement(props) }
        </Translate>

        <fieldset>
          <RadioCollection
            {...props}
            name='citizenStatus'
          >
          <RadioSelector
            value='Yes'
            text={translations.shared.commonAnswers.yes}
          />
          <RadioSelector
            value='No'
            text={translations.shared.commonAnswers.no}
          />
          <RadioSelector
            value='decline'
            text={translations.shared.commonAnswers.declineToAnswer}
          />
          </RadioCollection>
        </fieldset>

        <Accordion
          id='what-if-not-citizen'
          title={translations.votingRegistration.citizenshipPage.faqQuestionWhatIfNotCitizen}
        >
          {translations.votingRegistration.citizenshipPage.faqAnswerWhatIfNotCitizen}
        </Accordion>

        <NavigationButtons {...props} />
      </form>
    </Page>
  );
};

export default CitizenStatusPage;
