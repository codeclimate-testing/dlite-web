'use strict';

import React                from 'react';
import CheckboxCollection   from '../../checkbox-selector-collection.jsx';
import CheckboxSelector     from '../../checkbox-selector.jsx';
import {
  getStringByAction
}   from '../../../helpers/data/card-actions';
import Translator          from '../../../i18n/translator-tag.jsx';

const Form = (props) => {
  if (!props.showIf) { return null; }

  let formName = props.formName ? `${props.formName}sections` : 'sections';

  return (
    <div className='row change-sections-form'>
      <hr />
        <Translator
          tag             = 'h3'
          className       = 'question'
          translationPath = 'intro.correctOrUpdatePage.chooseChangeSection.prompt.correct'
          tabIndex        = '0'
        />
      <fieldset role='group' aria-label='What do you need to change choice'>
        <CheckboxCollection
          {...props}
          name          = { formName }
          array         = { props.cardChanges.sections }
          errorMessage  = { props.validations.sections() }
        >
          <CheckboxSelector value='name'>
            <Translator tag = 'span' translationPath = 'intro.correctOrUpdatePage.chooseChangeSection.values.0' />
          </CheckboxSelector>

          <CheckboxSelector value='sex'>
            <Translator tag = 'span' translationPath = 'intro.correctOrUpdatePage.chooseChangeSection.values.1' />
          </CheckboxSelector>

          <CheckboxSelector value='dateOfBirth'>
            <Translator tag = 'span' translationPath = 'intro.correctOrUpdatePage.chooseChangeSection.values.2' />
          </CheckboxSelector>

          <CheckboxSelector value='address'>
            <Translator tag = 'span' translationPath = 'intro.correctOrUpdatePage.chooseChangeSection.values.3' />
          </CheckboxSelector>

          <CheckboxSelector value='other'>
            <Translator tag = 'span' translationPath = 'intro.correctOrUpdatePage.chooseChangeSection.values.4' />
          </CheckboxSelector>
        </CheckboxCollection>
      </fieldset>
    </div>
  )
};

export default Form;
