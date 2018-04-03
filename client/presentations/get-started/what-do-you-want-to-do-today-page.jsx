'use strict';

import React                from 'react';

import Page                 from '../../containers/page.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import RadioSelector        from '../radio-selector.jsx';
import NavigationButtons    from '../navigation-buttons.jsx';
import Translator           from '../../i18n/translator-tag.jsx';
import {
  getCorrectString
}  from '../../helpers/data/card-type';

const Form = (props) => {
  const tempObjectThatNeedsTranslations = {
    explanation: '',
    values: [
      "Get a driver license for the first time",
      "Renew your driver license",
      "Correct or update your driver license",
      "Replace your driver license"
    ]
  };

  const anotherTempObjectThatNeedsTranslation = {
    explanation: '',
    values: [
      'Get an ID card for the first time',
      'Renew your ID card',
      'Correct or update your ID card',
      'Replace your ID card'
    ]
  };

  let textKey = getCorrectString(props, 'addDL', 'addID', 'newCard');
  let explainKey, newKey, renewKey, updateKey, replaceKey;
  switch (textKey) {
    case 'addDL':
      newKey      = 'newApproved.intro.wdywtdtPage.addDL.values.0'
      renewKey    = 'newApproved.intro.wdywtdtPage.addDL.values.1'
      updateKey   = 'newApproved.intro.wdywtdtPage.addDL.values.2'
      replaceKey  = 'newApproved.intro.wdywtdtPage.addDL.values.3'
      break;
    case 'addID':
      newKey      = 'newApproved.intro.wdywtdtPage.addID.values.0'
      renewKey    = 'newApproved.intro.wdywtdtPage.addID.values.1'
      updateKey   = 'newApproved.intro.wdywtdtPage.addID.values.2'
      replaceKey  = 'newApproved.intro.wdywtdtPage.addID.values.3'
      break;
    case 'newCard':
      explainKey  = 'intro.wdywtdtPage.explanation';
      newKey      = 'intro.wdywtdtPage.values.0';
      renewKey    = 'intro.wdywtdtPage.values.1';
      updateKey   = 'intro.wdywtdtPage.values.2';
      replaceKey  = 'intro.wdywtdtPage.values.3';
      break;
  }

  let name = getCorrectString(
    props, 'DLAction', 'IDAction', 'cardAction',
  );

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-card-action'>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'intro.wdywtdtPage.prompt'
        />

        <Translator
          tag             = 'p'
          translationPath = { explainKey }
        />

        <form onSubmit= { props.onSubmit }>
          <fieldset role='group' aria-label='What do you want to do?'>
            <RadioCollection
              {...props}
              name    = { name }
              onBlur  = { props.onBlurValidate }
              errorMessage = { props.validations.cardAction() }
            >
              <RadioSelector value = 'new' className='long-text'>
                <Translator tag = 'span' translationPath = { newKey } />
              </RadioSelector>

              <RadioSelector value = 'renew' className='long-text'>
                <Translator tag = 'span' translationPath = { renewKey } />
              </RadioSelector>

              <RadioSelector value = 'change' className='long-text'>
                <Translator tag = 'span' translationPath = { updateKey } />
              </RadioSelector>

              <RadioSelector value='replace' className='long-text'>
                <Translator tag = 'span' translationPath = { replaceKey } />
              </RadioSelector>

            </RadioCollection>
          </fieldset>
          <NavigationButtons
            errorMessage= { props.validations.cardAction() }
            { ...props }
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;
