'use strict';

import React                from 'react';
import CheckboxCollection   from '../../checkbox-selector-collection.jsx';
import CheckboxSelector     from '../../checkbox-selector.jsx';
import {
  getStringByAction
}   from '../../../helpers/data/card-actions';

const Form = (props) => {
  if(!props.showIf ){ return null; }

  const correctText = props.translations.intro.correctOrUpdatePage.chooseChangeSection.prompt.correct;
  const updateText = props.translations.intro.correctOrUpdatePage.chooseChangeSection.prompt.update;
  let headerText = getStringByAction(props, null, null, null, null, updateText, correctText);

  return (
    <div className='row change-sections-form'>
      <hr/>

      <h3 className = 'question'>{headerText}</h3>

      <p>Select all that apply.</p>

      <fieldset>
      <CheckboxCollection
        {...props}
        name          = 'sections'
        array         = { props.cardChanges.sections }
        errorMessage  = { props.validations.sections() }
      >
        <CheckboxSelector
          value='name'
          text = {props.translations.intro.correctOrUpdatePage.chooseChangeSection.values[0]}
        />

        <CheckboxSelector
          value='sex'
          text = {props.translations.intro.correctOrUpdatePage.chooseChangeSection.values[1]}
        />

        <CheckboxSelector
          value='dateOfBirth'
          text = {props.translations.intro.correctOrUpdatePage.chooseChangeSection.values[2]}
        />

        <CheckboxSelector
          value='address'
          text = {props.translations.intro.correctOrUpdatePage.chooseChangeSection.values[3]}
        />

        <CheckboxSelector
          value='other'
          text = {props.translations.intro.correctOrUpdatePage.chooseChangeSection.values[4]}
        />
      </CheckboxCollection>
      </fieldset>
    </div>
  )
};

export default Form;
