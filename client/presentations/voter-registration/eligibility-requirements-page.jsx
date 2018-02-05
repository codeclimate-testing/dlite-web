'use strict';
import React                from 'react';
import RadioSelector        from '../radio-selector.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import Page                 from '../../containers/page.jsx';
import NavigationButtons    from '../navigation-buttons.jsx';
import translations         from '../../i18n';
import { checkPreReg }      from '../../helpers/data/youth';
import { isPreregistering } from '../../helpers/calculate-age';

const YouthPoint = (props) => {
  if (!props.showIf){ return null; }
  return <li className='translation-missing'>I am 16 or 17 years old and would like to pre-register to vote</li>
};

const text = {
  'voterPreRegistration': 'If you don\'t meet all the requirements, you are not eligible to pre-register to vote.',
  'voterRegistration': translations.votingRegistration.eligibilityPage.faqAnswerWhatIfDontMeetRequirements
};

const PreRegText = (props) => {
  if (!props.showIf) { return null; }
  return <p className='translation-missing'>{text.voterPreRegistration}</p>
};

const RegText = (props) => {
  if (!props.showIf) { return null; }
  return <p>{text.voterRegistration}</p>
};

const EligibilityRequirements = (props) => {

  let showPreReg = isPreregistering(props.dateOfBirth);

  return (
    <Page
      {...props}
      sectionKey={checkPreReg(props.dateOfBirth)}
    >
      <div>
        <h2 className='question'>{translations.votingRegistration.eligibilityPage.pagePrompt}</h2>
        <ul className='bullet-list'>
          <li>{translations.votingRegistration.eligibilityPage.usCitizenshipStatement}</li>
          <li>{translations.votingRegistration.eligibilityPage.caCitizenshipStatement}</li>
          <YouthPoint
            showIf = {showPreReg}
          />
          <li>{translations.votingRegistration.eligibilityPage.convictionStatement}</li>
          <li>{translations.votingRegistration.eligibilityPage.mentalCompetenceStatement}</li>
        </ul>

        <p className='translation-missing'>If you decline to answer, you cannot register to vote.</p>

          <form onSubmit={props.onSubmit} className='eligibility-requirements-form'>
          <div>
            <fieldset>
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
            </fieldset>
          </div>

          <NavigationButtons {...props} />
        </form>

        <p><b>{translations.votingRegistration.eligibilityPage.faqQuestionWhatIfDontMeetRequirements}</b></p>

        <PreRegText showIf={showPreReg} />
        <RegText showIf={!showPreReg} />

        <p className='translation-missing'>Your response to this question <b>will not</b> be shared with election officials.</p>
      </div>
    </Page>
  );
};


export default EligibilityRequirements;
