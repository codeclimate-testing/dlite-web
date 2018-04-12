'use strict';

import React from 'react';

import Page               from '../../containers/page.jsx';
import ChooseCardCheckbox from './choose-card/choose-card-checkbox.jsx';
import ChooseCardRadio    from './choose-card/choose-card-radio.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import {
  getStringByAction,
  isGettingNew
}  from   '../../helpers/data/card-actions';
import Translator         from '../../i18n/translator-tag.jsx';

const Form = (props) => {

  const newString =
        <Translator
          tag             = 'h2'
          lassName        = 'question'
          translationPath = 'intro.chooseSelectionPage.prompt.new'
        />
  const renewString =
        <Translator
          tag           = 'h2'
          className     = 'question'
          translationPath = 'intro.chooseSelectionPage.prompt.renew'
        />
  const replaceString =
        <Translator
          tag           = 'h2'
          className     = 'question'
          translationPath = 'intro.chooseSelectionPage.prompt.replace'
        />
  const changeString =
        <Translator
          tag           = 'h2'
          className     = 'question'
          translationPath = 'intro.chooseSelectionPage.prompt.correctOrUpdate'
        />


  let questionText = getStringByAction(props, newString, renewString, replaceString, changeString);

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-card-form'>
        {questionText}

        <form onSubmit={ props.onSubmit } >
          <ChooseCardCheckbox
            {...props}
            showIf    = { isGettingNew(props) }
          />
          <ChooseCardRadio
            {...props}
            showIf        = { !isGettingNew(props) }
          />

          <NavigationButtons errorMessage = { props.validations.cardType() }
            {...props}
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;
