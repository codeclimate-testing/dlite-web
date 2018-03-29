'use strict';

import React              from 'react';
import RadioSelector      from '../radio-selector.jsx';
import RadioCollection    from '../radio-selector-collection.jsx';
import UpdateForm         from '../get-started/correct-or-update/update-form.jsx';
import OtherText          from '../get-started/correct-or-update/text-form.jsx';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import Translator         from '../../i18n/translator-tag.jsx';
import {
  otherIsSelected,
  hasSpecifiedChange
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
        <Translator
          tag             = 'p'
          translationPath = 'cdl.correctOrUpdatePage.explanation'
        />

        <form onSubmit={ props.onSubmit }>
          <fieldset role='group' aria-label='Correct or update choice'>
            <RadioCollection
              {...props}
              errorMessage  = { props.validations.correctOrUpdate() }
              selectedValue = { props.cardChanges.correctOrUpdate }
              name          = 'correctOrUpdate'
            >
              <RadioSelector
                value = 'correct'
                text  = 'Correct my CDL'
              />
              <RadioSelector
                value = 'update'
                text  = 'Update my CDL'
              />
            </RadioCollection>
          </fieldset>

          <UpdateForm
            {...props}
            showIf    = { hasSpecifiedChange(props) }
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
