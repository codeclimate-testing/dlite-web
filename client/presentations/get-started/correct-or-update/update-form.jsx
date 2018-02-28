'use strict';

import React                from 'react';
import CheckboxCollection   from '../../checkbox-selector-collection.jsx';
import CheckboxSelector     from '../../checkbox-selector.jsx';
import {
  getStringByAction
}   from '../../../helpers/data/card-actions';
import translations       from '../../../i18n';
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const Form = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  const correctText = convertToHtml('h3', translations[locale].intro.correctOrUpdatePage.chooseChangeSection.prompt.correct, 'question');
  const updateText = convertToHtml('h3', translations[locale].intro.correctOrUpdatePage.chooseChangeSection.prompt.update, 'question');
  let headerText = getStringByAction(props, null, null, null, null, updateText, correctText);

  return (
    <div className='row change-sections-form'>
      <hr />
      {headerText}
      <p className='translation-missing'>Select all that apply.</p>
      <fieldset>
        <CheckboxCollection
          {...props}
          name          = {`${props.formName}-sections`}
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
