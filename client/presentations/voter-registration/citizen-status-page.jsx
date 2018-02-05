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

const text = {
  voterPreRegistration: translations.votingRegistration.shared.declineToAnswerInformationPreRegistration,
  voterRegistration: translations.votingRegistration.shared.declineToAnswerInformationRegistration
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
        <h2 className='question'>{translations.votingRegistration.citizenshipPage.pagePrompt}</h2>

        <PreRegText
          showIf = {showPreReg}
        />
        <RegText
          showIf = {!showPreReg}
        />

        <p>{text[props.prereg]}</p>

        <fieldset>
        <RadioCollection
          {...props}
          name          = 'citizenStatus'
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
