'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import RadioSelector        from '../radio-selector.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import Page                 from '../../containers/page.jsx';
import translations         from '../../i18n';

const text = {
  voterPreRegistration: translations.votingRegistration.shared.declineToAnswerInformationPreRegistration,
  voterRegistration: translations.votingRegistration.shared.declineToAnswerInformationRegistration
};

const CitizenStatusPage = (props) => {
  return (
    <Page
      {...props}
      sectionKey={props.prereg}
    >
      <form onSubmit={props.onSubmit} className = 'citizen-status-form'>
        <h2 className='question'>{translations.votingRegistration.citizenshipPage.pagePrompt}</h2>
        <p>{text[props.prereg]}</p>

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

        <NavigationButtons {...props} />
      </form>
    </Page>
  );
};

export default CitizenStatusPage;
