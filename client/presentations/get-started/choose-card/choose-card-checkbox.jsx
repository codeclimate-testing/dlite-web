'use strict';

import React from 'react';

import CheckboxSelector   from '../../checkbox-selector.jsx';
import CheckboxCollection from '../../checkbox-selector-collection.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const Form = (props) => {
  if (!props.showIf) { return null; }

  return (
    <div className='row choose-new-cards'>
      <Translator
        tag             = 'h2'
        lassName        = 'question'
        translationPath = 'intro.chooseSelectionPage.explanationMultiCard'
      />
      <div className='row'>
        <fieldset role='group' aria-label='Card choice'>
          <CheckboxCollection
            {...props}
            name          = 'new'
            array         = { props.cardType }
            onBlur        = { props.onBlurValidate }
            errorMessage  = { props.validations.cardType()}
          >
            <CheckboxSelector value = 'ID'>
              <Translator tag = 'span' translationPath = 'intro.chooseSelectionPage.values.0' />
            </CheckboxSelector>

            <CheckboxSelector value = 'DL'>
              <Translator tag = 'span' translationPath = 'intro.chooseSelectionPage.values.1' />
            </CheckboxSelector>

          </CheckboxCollection>
        </fieldset>
        <div className='unit spacer' />
      </div>
    </div>
  )
};

export default Form;
