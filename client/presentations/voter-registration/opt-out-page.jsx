'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import RadioSelector        from '../radio-selector.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import Page                 from '../../containers/page.jsx';
import { checkPreReg }      from '../../helpers/data/youth';
import { isPreregistering } from '../../helpers/calculate-age';
import Translator           from '../../i18n/translator-tag.jsx';

const OptOutPage = (props) => {

  let translation;

  if (isPreregistering(props.dateOfBirth)) {
    translation = 'votingRegistration.preRegOptOutPage';
  } else {
    translation = 'votingRegistration.optOutPage';
  }

  let preRegString = checkPreReg(props.dateOfBirth);

  return (
    <Page
      {...props}
      sectionKey={preRegString}
    >
      <form onSubmit={props.onSubmit} className = 'opt-out-form'>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'votingRegistration.optOutPage.pagePrompt'
          tabIndex        = '0'
        />

        <fieldset role='group' aria-label='Choose to vote'>
          <RadioCollection
            {...props}
            name          = 'optOut'
            errorMessage  = {props.validations.optOut()}
          >
            <RadioSelector
              value     = 'new'
              className = 'long-text'
            >
              <Translator tag='span' translationPath={`${translation}.answerNewRegistration`}/>
            </RadioSelector>

            <RadioSelector
              value     = 'existing'
              className = 'long-text'
            >
              <Translator tag='span' translationPath={`${translation}.answerUpdateRegistration`}/>
            </RadioSelector>

            <RadioSelector
              value     = 'optOut'
              className = 'long-text'
            >
              <Translator tag='span' translationPath={`${translation}.answerOptOut`}/>
            </RadioSelector>
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
