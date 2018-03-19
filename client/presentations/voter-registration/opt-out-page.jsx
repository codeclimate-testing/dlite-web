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
        />

        <fieldset role='group' aria-label='Choose to vote'>
          <RadioCollection
            {...props}
            name          = 'optOut'
            errorMessage  = {props.validations.optOut()}
          >
            <RadioSelector
              value     = 'new'
              text      = { <Translator tag='span' translationPath={`${translation}.answerNewRegistration`}/> }
              className = 'long-text'
            />
            <RadioSelector
              value     = 'existing'
              text      = { <Translator tag='span' translationPath={`${translation}.answerUpdateRegistration`}/> }
              className = 'long-text'
            />
            <RadioSelector
              value     = 'optOut'
              text      = { <Translator tag='span' translationPath={`${translation}.answerOptOut`}/> }
              className = 'long-text'
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
