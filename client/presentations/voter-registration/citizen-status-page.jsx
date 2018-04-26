'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import RadioSelector        from '../radio-selector.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import Accordion            from '../../containers/accordion.jsx';
import RegIntro             from './introduction/introduction.jsx';
import PreRegIntro          from './introduction/introduction-prereg.jsx';
import Page                 from '../../containers/page.jsx';
import { checkPreReg }      from '../../helpers/data/youth';
import { isPreregistering } from '../../helpers/calculate-age';
import Translator           from '../../i18n/translator-tag.jsx';
import {
  RadioSelectorYesTranslation,
  RadioSelectorNoTranslation,
  RadioSelectorDeclineTranslation
} from '../shared/translations-radio-selector.jsx';

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
  return (
    <Page
      {...props}
      sectionKey={checkPreReg(props.dateOfBirth)}
    >
     <VoterIntro {...props} />

     <hr />

     <form onSubmit={props.onSubmit} className = 'citizen-status-form'>
        <Translator
          tag               = 'h2'
          className         = 'question'
          translationPath   = 'votingRegistration.citizenshipPage.pagePrompt'
          tabIndex          = '0'
        />

        <Translator
          tag               = 'p'
          translationPath   = { declineStatement(props) }
        />

        <fieldset role='group' aria-label='Citizen status'>
          <RadioCollection
            {...props}
            name='citizenStatus'
          >
          <RadioSelector
            value = 'Yes'
            text  = {<RadioSelectorYesTranslation />}
          />
          <RadioSelector
            value = 'No'
            text  = {<RadioSelectorNoTranslation />}
          />
          <RadioSelector
            value = 'decline'
            text  = {<RadioSelectorDeclineTranslation />}
          />
          </RadioCollection>
        </fieldset>

        <Accordion
          id     = 'what-if-not-citizen'
          title  = 'votingRegistration.citizenshipPage.faqQuestionWhatIfNotCitizen'
        >
          <Translator
            tag               = 'p'
            translationPath   = 'votingRegistration.citizenshipPage.faqAnswerWhatIfNotCitizen'
          />
        </Accordion>

        <NavigationButtons {...props} />
      </form>
    </Page>
  );
};

export default CitizenStatusPage;
