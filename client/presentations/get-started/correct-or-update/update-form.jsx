'use strict';

import React                from 'react';
import CheckboxCollection   from '../../checkbox-selector-collection.jsx';
import CheckboxSelector     from '../../checkbox-selector.jsx';
import { SubQuestionHeader } from '../../question-header.jsx';
import {
  isCorrecting,
  isUpdating
}   from '../../../helpers/data/card-actions';

const Form = (props) => {
  if(!props.showIf ){ return null; }
  return (
    <div className='row change-sections-form'>
      <hr/>

      <SubQuestionHeader
        text    = { props.translations.intro.correctOrUpdatePage.chooseChangeSection.prompt.correct }
        showIf  = { isCorrecting(props) }
      />
      <SubQuestionHeader
        text    = { props.translations.intro.correctOrUpdatePage.chooseChangeSection.prompt.update }
        showIf  = { isUpdating(props) }
      />

      <p>Select all that apply.</p>

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
    </div>
  )
};

export default Form;
