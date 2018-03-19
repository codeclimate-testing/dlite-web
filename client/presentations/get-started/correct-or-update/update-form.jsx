'use strict';

import React                from 'react';
import CheckboxCollection   from '../../checkbox-selector-collection.jsx';
import CheckboxSelector     from '../../checkbox-selector.jsx';
import {
  getStringByAction
}   from '../../../helpers/data/card-actions';
import Translate          from '../../../i18n/translate-tag.jsx';

const Form = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  let formName = props.formName ? `${props.formName}sections` : 'sections';

  const correctText = props.translations[locale].intro.correctOrUpdatePage.chooseChangeSection.prompt.correct;
  const updateText  = props.translations[locale].intro.correctOrUpdatePage.chooseChangeSection.prompt.update;
  let headerText    = getStringByAction(props, null, null, null, null, updateText, correctText);

  return (
    <div className='row change-sections-form'>
      <hr />
        <Translate tag='h3' className='question'>
          {headerText}
        </Translate>

        <Translate tag='p'>
          {props.translations[locale].intro.chooseSelectionPage.explanationMultiCard}
        </Translate>

      <fieldset role='group' aria-label='What do you need to change choice'>
        <CheckboxCollection
          {...props}
          name          = { formName }
          array         = { props.cardChanges.sections }
          errorMessage  = { props.validations.sections() }
        >
          <CheckboxSelector
            value='name'
            text = {props.translations[locale].intro.correctOrUpdatePage.chooseChangeSection.values[0]}
          />

          <CheckboxSelector
            value='sex'
            text = {props.translations[locale].intro.correctOrUpdatePage.chooseChangeSection.values[1]}
          />

          <CheckboxSelector
            value='dateOfBirth'
            text = {props.translations[locale].intro.correctOrUpdatePage.chooseChangeSection.values[2]}
          />

          <CheckboxSelector
            value='address'
            text = {props.translations[locale].intro.correctOrUpdatePage.chooseChangeSection.values[3]}
          />

          <CheckboxSelector
            value='other'
            text = {props.translations[locale].intro.correctOrUpdatePage.chooseChangeSection.values[4]}
          />
        </CheckboxCollection>
      </fieldset>
    </div>
  )
};

export default Form;
