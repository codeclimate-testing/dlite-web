'use strict';
import React                from 'react';
import RadioSelector        from '../radio-selector.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import Page                 from '../../containers/page.jsx';
import NavigationButtons    from '../navigation-buttons.jsx';
import translations         from '../../i18n';
import { checkPreReg }      from '../../helpers/data/youth';
import { isPreregistering } from '../../helpers/calculate-age';
import { convertToHtml }  from '../../i18n/convert-to-html.jsx';

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
        {convertToHtml('h2', translations.votingRegistration.eligibilityPage.pagePrompt, 'question')}
        <ul className='bullet-list'>
          {convertToHtml('li', translations.votingRegistration.eligibilityPage.usCitizenshipStatement)}
          {convertToHtml('li', translations.votingRegistration.eligibilityPage.caCitizenshipStatement)}
          <YouthPoint
            showIf = {showPreReg}
          />
          {convertToHtml('li', translations.votingRegistration.eligibilityPage.convictionStatement)}
          {convertToHtml('li', translations.votingRegistration.eligibilityPage.mentalCompetenceStatement)}
        </ul>

        {convertToHtml('p', translations.votingRegistration.shared.declineToAnswerInformationRegistration)}

        <form onSubmit={props.onSubmit} className='eligibility-requirements-form'>
          <div>
            <fieldset>
              <RadioCollection
                {...props}
                name='eligibilityRequirements'
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
