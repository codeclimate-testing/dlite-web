'use strict';

import React              from 'react';
import RadioSelector      from '../radio-selector.jsx';
import RadioCollection    from '../radio-selector-collection.jsx';
import UpdateForm         from './correct-or-update/update-form.jsx';
import CorrectForm         from '../get-started/correct-or-update/correct-form.jsx';
import OtherText          from '../get-started/correct-or-update/text-form.jsx';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import Translator         from '../../i18n/translator-tag.jsx';
import {
  otherIsSelected,
}  from '../../helpers/data/card-actions';


const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-card-change'>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'intro.correctOrUpdatePage.prompt'
        />
        <form onSubmit={ props.onSubmit }>
          <fieldset role='group' aria-label='Correct or update choice'>
            <RadioCollection
              {...props}
              errorMessage  = { props.validations.correctOrUpdate() }
              selectedValue = { props.cardChanges.correctOrUpdate }
              name          = 'correctOrUpdate'
            >
              <RadioSelector value='correct'>
                <Translator tag='span' translationPath='cdl.correctOrUpdatePage.values.0'/>
              </RadioSelector>
              <RadioSelector value='update'>
                <Translator tag='span' translationPath='cdl.correctOrUpdatePage.values.1'/>
              </RadioSelector>
            </RadioCollection>
          </fieldset>

          <UpdateForm
            {...props}
            showIf    = { props.cardChanges.correctOrUpdate === 'update' }
          />
          <CorrectForm
            {...props}
            showIf    = { props.cardChanges.correctOrUpdate === 'correct' }
          />
          <OtherText
            {...props}
            showIf    = { otherIsSelected(props) }
          />
          <NavigationButtons
            {...props}
            errorMessage = { props.validations.all() }
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;
