'use strict';
import React                from 'react';
import Accordion            from '../../../containers/accordion.jsx';
import translations         from '../../../i18n';
import { isPreregistering } from '../../../helpers/calculate-age';
import Translate            from '../../../i18n/translate-tag.jsx';

const FAQcontentsPreReg = () => {
  return (
    <p className='translation-missing'>
      'If you don\'t meet all the requirements, you are not eligible to pre-register to vote.',
    </p>
  );
};

const FAQcontentsReg = () => {
  return (
    <Translate tag='p'>
      { translations.votingRegistration.eligibilityPage.faqAnswerWhatIfDontMeetRequirements }
    </Translate>
  );
};

const FAQcontents = (props) => {
  return isPreregistering(props.dateOfBirth) ? <FAQcontentsPreReg /> : <FAQcontentsReg />;
};

const FAQ = (props) => {
  const accordionTitle =  translations.votingRegistration.eligibilityPage.faqQuestionWhatIfDontMeetRequirements;

  return (
    <Accordion
      title={accordionTitle}
      id='dont-meet-eligibility-requirments'
    >
      <FAQcontents {...props} />

      <p className='translation-missing'>
        Your response to this question <b>will not</b> be shared with election officials.
      </p>
    </Accordion>
  );
};

export default FAQ;
