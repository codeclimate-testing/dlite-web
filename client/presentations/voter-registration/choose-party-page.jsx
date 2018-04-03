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

const NewOrRegisteredVoter = (props) => {
  if(props.optOut === 'existing') {
    return(
      <Translator
        tag               = 'p'
        translationPath   = 'votingRegistration.updateChoosePartyPage.explanation'
      />
      )
  } else {
    return (
    <Translator
      tag               = 'p'
      translationPath   = 'votingRegistration.choosePartyPage.explanation'
    />
    )
  }
}

const ChoosePartyPageAnswerNo = () => {
  return(
    <Translator
      tag               = 'span'
      translationPath   = 'votingRegistration.choosePartyPage.answerNo'
    />
  );
}

const ChoosePartyPage = (props) => {
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
          <NewOrRegisteredVoter {...props}/>

          <fieldset role='group' aria-label='Choose party'>
            <RadioCollection
              {...props}
              name          = 'isSelected'
              selectedValue = {props.politicalPartyChoose.isSelected}
              errorMessage  = {props.validations.isSelected()}
            >
              <RadioSelector value     = 'Yes' className = 'long-text'>
                <RadioSelectorYesTranslation />
              </RadioSelector>

              <RadioSelector value = 'Skip' className = 'long-text'>
                <ChoosePartyPageAnswerNo />
              </RadioSelector>

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
