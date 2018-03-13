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
import Translator           from '../../i18n/translator-tag.jsx';

const declineStatement = (props) => {

  if (isPreregistering(props.dateOfBirth)) {
    return  'votingRegistration.shared.declineToAnswerInformationPreRegistration';
  } else {
    return 'votingRegistration.shared.declineToAnswerInformationRegistration';
  }

};

const VoterIntro = (props) => {
  return isPreregistering(props.dateOfBirth) ? <PreRegIntro {...props}/> : <RegIntro {...props}/>;
};

const CitizenStatusPage = (props) => {
  let showPreReg = isPreregistering(props.dateOfBirth);
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey={checkPreReg(props.dateOfBirth)}
    >
     <VoterIntro {...props} />

     <hr />

     <form onSubmit={props.onSubmit} className = 'citizen-status-form'>
        <Translator
          tag           = 'h2'
          className     = 'question'
          contentKey    = 'votingRegistration.citizenshipPage.pagePrompt'
        />

        <Translator
          tag         = 'p'
          contentKey  = { declineStatement(props) }
        />

        <fieldset>
          <RadioCollection
            {...props}
            name='citizenStatus'
          >
          <RadioSelector
            value='Yes'
            text={translations[locale].shared.commonAnswers.yes}
          />
          <RadioSelector
            value='No'
            text={translations[locale].shared.commonAnswers.no}
          />
          <RadioSelector
            value='decline'
            text={translations[locale].shared.commonAnswers.declineToAnswer}
          />
          </RadioCollection>
        </fieldset>

        <Accordion
          id='what-if-not-citizen'
          title={translations[locale].votingRegistration.citizenshipPage.faqQuestionWhatIfNotCitizen}
        >
          {translations[locale].votingRegistration.citizenshipPage.faqAnswerWhatIfNotCitizen}
        </Accordion>

        <NavigationButtons {...props} />
      </form>
    </Page>
  );
};

export default CitizenStatusPage;
