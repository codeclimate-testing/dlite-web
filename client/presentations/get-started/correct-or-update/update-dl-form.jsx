'use strict';

import React                from 'react';
import CheckboxCollection   from '../../checkbox-selector-collection.jsx';
import CheckboxSelector     from '../../checkbox-selector.jsx';
import {
  getStringByAction
}   from '../../../helpers/data/card-actions';
import { getDL } from '../../../helpers/data/card-type';
import Translator          from '../../../i18n/translator-tag.jsx';

const LicenseExplanation = (props) => {
  if(getDL(props)) {
    return (
      <Translator
        tag='p'
        translationPath = 'intro.correctOrUpdatePage.chooseChangeSection.license.explanation'
      />
    )
  }
}

const Form = (props) => {
  if (!props.showIf) { return null; }

  let formName = props.formName ? `${props.formName}sections` : 'sections';
  return (
    <div className='row change-sections-form'>
      <hr />
      <Translator
        tag             = 'h3'
        className       = 'question'
        translationPath = 'intro.correctOrUpdatePage.chooseChangeSection.prompt.update'
        tabIndex        = '0'
      />
      <LicenseExplanation {...props} />

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

        <CheckboxSelector value='drive'>
          <Translator tag = 'span' translationPath = 'intro.correctOrUpdatePage.chooseChangeSection.license.values.0' />
        </CheckboxSelector>

        <CheckboxSelector value='endorsements'>
          <Translator tag = 'span' translationPath = 'intro.correctOrUpdatePage.chooseChangeSection.license.values.1' />
        </CheckboxSelector>

        <CheckboxSelector value='restrictions'>
          <Translator tag = 'span' translationPath = 'intro.correctOrUpdatePage.chooseChangeSection.license.values.2' />
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
