'use strict';
import React                from 'react';
import Accordion            from '../../../containers/accordion.jsx';
import { isPreregistering } from '../../../helpers/calculate-age';
import Translator           from '../../../i18n/translator-tag.jsx';

const FAQContentsPreReg = (props) => {
  return (
    <p className='translation-missing'>
      'If you don\'t meet all the requirements, you are not eligible to pre-register to vote.',
    </p>
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

const AccordionTitle = () => {
  return (
    <Translator
      tag             = 'span'
      translationPath = 'votingRegistration.eligibilityPage.faqQuestionWhatIfDontMeetRequirements'
    />
  );
}
const FAQ = (props) => {

  return (
    <Accordion
      title={<AccordionTitle />}
      id='dont-meet-eligibility-requirements'
    >
      <FAQContents {...props} />
      <p className='translation-missing'>
        Your response to this question <b>will not</b> be shared with election officials.
      </p>
    </Accordion>
  );
};

export default FAQ;
