'use strict';

import React from 'react';

import RadioSelector      from '../radio-selector.jsx';
import RadioCollection    from '../radio-selector-collection.jsx';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import translations       from '../../i18n';

const YouthPoint = (props) => {
  if (props.prereg !== 'voterPreRegistration'){ return null; }
  return <li className='translation-missing'>I am 16 or 17 years old and would like to pre-register to vote</li>
};

const text = {
  'voterPreRegistration': 'If you don\'t meet all the requirements, you are not eligible to pre-register to vote.',
  'voterRegistration': translations.votingRegistration.eligibilityPage.faqAnswerWhatIfDontMeetRequirements
};

const EligibilityRequirements = (props) => {
  return (
    <Page
      {...props}
      sectionKey={props.prereg}
    >
      <div>
        <h2 className='question'>{translations.votingRegistration.eligibilityPage.pagePrompt}</h2>
        <ul className='bullet-list'>
          <li>{translations.votingRegistration.eligibilityPage.usCitizenshipStatement}</li>
          <li>{translations.votingRegistration.eligibilityPage.caCitizenshipStatement}</li>
          <YouthPoint prereg = {props.prereg} />
          <li>{translations.votingRegistration.eligibilityPage.convictionStatement}</li>
          <li>{translations.votingRegistration.eligibilityPage.mentalCompetenceStatement}</li>
        </ul>

        <p className='translation-missing'>If you decline to answer, you cannot register to vote.</p>

          <form onSubmit={props.onSubmit} className='eligibility-requirements-form'>
          <div>
            <RadioCollection
              {...props}
              name='eligibilityRequirements'
            >
              <RadioSelector
                value='Yes'
                text={translations.shared.commonAnswers.Yes}
              />
              <RadioSelector
                value='No'
                text={translations.shared.commonAnswers.No}
              />
              <RadioSelector
                value='decline'
                text={translations.shared.commonAnswers.declineToAnswer}
              />
            </RadioCollection>
          </div>

          <NavigationButtons {...props} />
          </form>

        <p><b>{translations.votingRegistration.eligibilityPage.faqQuestionWhatIfDontMeetRequirements}</b></p>
        <p className='translation-missing'>{text[props.prereg]}</p>
        <p className='translation-missing'>Your response to this question <b>will not</b> be shared with election officials.</p>
      </div>
    </Page>
  );
};


export default EligibilityRequirements;
