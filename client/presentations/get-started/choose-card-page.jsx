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
import Translation        from '../../i18n/translate-tag.jsx';

const Form = (props) => {
  let locale = props.locale;
  const newString =
        <Translation tag='h2' className='question'>
          {translations[locale].intro.chooseSelectionPage.prompt.new}
        </Translation>
  const renewString =
        <Translation tag='h2' className='question'>
          {translations[locale].intro.chooseSelectionPage.prompt.renew}
        </Translation>
  const replaceString =
        <Translation tag='h2' className='question'>
          {translations[locale].intro.chooseSelectionPage.prompt.replace}
        </Translation>
  const changeString =
        <Translation tag='h2' className='question'>
          {translations[locale].intro.chooseSelectionPage.prompt.correctOrUpdate}
        </Translation>


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
