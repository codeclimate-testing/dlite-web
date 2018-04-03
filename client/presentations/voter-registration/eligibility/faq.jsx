'use strict';
import React                from 'react';
import Accordion            from '../../../containers/accordion.jsx';
import { isPreregistering } from '../../../helpers/calculate-age';
import Translator           from '../../../i18n/translator-tag.jsx';

const FAQContentsPreReg = (props) => {
  return (
    <Translator
      tag             = 'p'
      translationPath = 'newApproved.votingRegistration.eligibilityPage.preRegRequirements'
    />
  );
};

const FAQContentsReg = (props) => {
  return (
    <Translator
      tag             = 'p'
      translationPath = 'votingRegistration.eligibilityPage.faqAnswerWhatIfDontMeetRequirements'
    />
  );
};

const FAQContents = (props) => {
  return isPreregistering(props.dateOfBirth) ? <FAQContentsPreReg {...props}/> : <FAQContentsReg {...props}/>;
};

const FAQ = (props) => {

  return (
    <Accordion
      id    = 'dont-meet-eligibility-requirements'
      title = 'votingRegistration.eligibilityPage.faqQuestionWhatIfDontMeetRequirements'
    >
      <FAQContents {...props} />
      <Translator
      tag             = 'p'
      translationPath = 'newApproved.votingRegistration.eligibilityPage.notSharedWithElectionOfficials'
      />
    </Accordion>
  );
};

export default FAQ;
