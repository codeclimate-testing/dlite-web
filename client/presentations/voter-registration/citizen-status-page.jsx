'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import RadioSelector        from '../radio-selector.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import Page                 from '../../containers/page.jsx';
import translations         from '../../i18n';
import { isYes, isNo }      from '../../helpers/data/validations';
import { checkPreReg }      from '../../helpers/data/youth';
import { isPreregistering } from '../../helpers/calculate-age';
import { convertToHtml }    from '../../i18n/convert-to-html.jsx';

const text = {
  voterPreRegistration: convertToHtml('p', translations.votingRegistration.shared.declineToAnswerInformationPreRegistration),
  voterRegistration: convertToHtml('p', translations.votingRegistration.shared.declineToAnswerInformationRegistration)
};

const PreRegText = (props) => {
  if (!props.showIf) { return null; }
  return text.voterPreRegistration;
};

const RegText = (props) => {
  if (!props.showIf) { return null; }
  return text.voterRegistration;
};

const CitizenStatusPage = (props) => {
  let showPreReg = isPreregistering(props.dateOfBirth);

  return (
    <Page
      {...props}
      sectionKey={checkPreReg(props.dateOfBirth)}
    >
      <form onSubmit={props.onSubmit} className = 'citizen-status-form'>
        {convertToHtml('h2', translations.votingRegistration.citizenshipPage.pagePrompt, 'question')}
        <PreRegText
          showIf = {showPreReg}
        />
        <RegText
          showIf = {!showPreReg}
        />

        {text[props.prereg]}

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

        <NavigationButtons {...props} />
      </form>
    </Page>
  );
};

export default CitizenStatusPage;
