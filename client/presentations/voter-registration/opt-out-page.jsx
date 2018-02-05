'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import RadioSelector        from '../radio-selector.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import Page                 from '../../containers/page.jsx';
import translations         from '../../i18n';
import { checkPreReg }      from '../../helpers/data/youth';

const allOptionText = {
  voterRegistration: {
    new       : translations.votingRegistration.optOutPage.answerNewRegistration,
    existing  : translations.votingRegistration.optOutPage.answerUpdateRegistration,
    optOut    : translations.votingRegistration.optOutPage.answerOptOut
  },
  voterPreRegistration: {
    new       : translations.votingRegistration.preRegOptOutPage.answerNewRegistration,
    existing  : translations.votingRegistration.preRegOptOutPage.answerUpdateRegistration,
    optOut    : translations.votingRegistration.preRegOptOutPage.answerOptOut
  }
};

const OptOutPage = (props) => {

  let preRegString = checkPreReg(props.dateOfBirth);
  let optionText = allOptionText[preRegString];

  return (
    <Page
      {...props}
      sectionKey={preRegString}
    >
      <form onSubmit={props.onSubmit} className = 'opt-out-form'>
        <h2 className='question'>{translations.votingRegistration.optOutPage.pagePrompt}</h2>

      <fieldset>
        <RadioCollection
          {...props}
          name          = 'optOut'
          errorMessage  = {props.validations.optOut()}
        >
          <RadioSelector
            value='new'
            text={ optionText.new }
          />
          <RadioSelector
            value='existing'
            text={ optionText.existing }
          />
          <RadioSelector
            value='optOut'
            text={ optionText.optOut }
          />
        </RadioCollection>
      </fieldset>

        <NavigationButtons
          {...props}
          errorMessage = { props.validations.all() }
        />
      </form>
    </Page>
  )
};

export default OptOutPage;
