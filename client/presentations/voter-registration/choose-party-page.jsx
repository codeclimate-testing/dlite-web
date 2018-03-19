'use strict';

import React                            from 'react';
import NavigationButtons                from '../navigation-buttons.jsx';
import RadioSelector                    from '../radio-selector.jsx';
import RadioCollection                  from '../radio-selector-collection.jsx';
import Page                             from '../../containers/page.jsx';
import PoliticalPartyPreference         from './voter-choose-party/political-party-preference.jsx';
import { checkPreReg }                  from '../../helpers/data/youth';
import Translator                       from '../../i18n/translator-tag.jsx';
import { RadioSelectorYesTranslation }  from '../shared/translations-radio-selector.jsx';

const ChoosePartyPageAnswerNo = () => {
  return(
    <Translator
      tag               = 'span'
      translationPath   = 'votingRegistration.choosePartyPage.answerNo'
    />
  );
}
const ChoosePartyPage = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey={checkPreReg(props.dateOfBirth)}
    >
      <form onSubmit={props.onSubmit} className='choose-party-form'>
        <div className='choose-political-party'>
          <Translator
            tag               = 'h2'
            className         = 'question'
            translationPath   = 'votingRegistration.choosePartyPage.pagePrompt'
          />
          <Translator
            tag               = 'p'
            translationPath   = 'votingRegistration.choosePartyPage.explanation'
          />

          <fieldset>
            <RadioCollection
            {...props}
            name          = 'isSelected'
            selectedValue = {props.politicalPartyChoose.isSelected}
            errorMessage  = {props.validations.isSelected()}
          >
            <RadioSelector
              value     = 'Yes'
              text      = { <RadioSelectorYesTranslation /> }
              className = 'long-text'
            />
            <RadioSelector
              value     = 'Skip'
              text      = { <ChoosePartyPageAnswerNo /> }
              className = 'long-text'
            />
          </RadioCollection>
          </fieldset>
        </div>

        <PoliticalPartyPreference
          {...props}
          selectedValue = {props.politicalPartyChoose.politicalPartyChoose}
          errorMessage  = {props.validations.politicalPartyChoose()}
        />

        <NavigationButtons
          {...props}
          errorMessage = { props.validations.all() }
        />
      </form>
    </Page>
  );
};

export default ChoosePartyPage;
