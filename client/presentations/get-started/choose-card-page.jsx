'use strict';

import React from 'react';

import Page               from '../../containers/page.jsx';
import ChooseCardCheckbox from './choose-card/choose-card-checkbox.jsx';
import ChooseCardRadio    from './choose-card/choose-card-radio.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import { IDorDL }         from '../../helpers/data/cards';
import {
  getStringByAction,
  isGettingNew
}  from   '../../helpers/data/card-actions';
import translations       from '../../i18n';
import { convertToHtml }  from '../../i18n/convert-to-html.jsx';

const newString = convertToHtml('h2', translations.intro.chooseSelectionPage.prompt.new, 'question');
const renewString = convertToHtml('h2', translations.intro.chooseSelectionPage.prompt.renew, 'question');
const replaceString = convertToHtml('h2', translations.intro.chooseSelectionPage.prompt.replace, 'question');
const changeString = convertToHtml('h2', translations.intro.chooseSelectionPage.prompt.correctOrUpdate, 'question');

const Form = (props) => {

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
            selectedValue = { IDorDL(props) }
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
