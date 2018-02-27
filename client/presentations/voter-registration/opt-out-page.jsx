'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import RadioSelector        from '../radio-selector.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import Page                 from '../../containers/page.jsx';
import translations         from '../../i18n';
import { checkPreReg }      from '../../helpers/data/youth';
import { isPreregistering } from '../../helpers/calculate-age';
import Translate            from '../../i18n/translate-tag.jsx';

const OptOutPage = (props) => {
  let translation;

  if (isPreregistering(props.dateOfBirth)) {
    translation = translations.votingRegistration.preRegOptOutPage;
  } else {
    translation = translations.votingRegistration.optOutPage;
  }

  let preRegString = checkPreReg(props.dateOfBirth);

  return (
    <Page
      {...props}
      sectionKey={preRegString}
    >
      <form onSubmit={props.onSubmit} className = 'opt-out-form'>
        <Translate tag='h2' className='question'>
         {translations.votingRegistration.optOutPage.pagePrompt}
        </Translate>

        <fieldset>
          <RadioCollection
            {...props}
            name          = 'optOut'
            errorMessage  = {props.validations.optOut()}
          >
            <RadioSelector
              value='new'
              text={ translation.answerNewRegistration }
              className='long-text'
            />
            <RadioSelector
              value='existing'
              text={ translation.answerUpdateRegistration }
              className='long-text'
            />
            <RadioSelector
              value='optOut'
              text={ translation.answerOptOut }
              className='long-text'
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
