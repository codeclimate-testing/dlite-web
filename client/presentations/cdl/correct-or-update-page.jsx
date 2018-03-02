'use strict';

import React              from 'react';
import RadioSelector      from '../radio-selector.jsx';
import RadioCollection    from '../radio-selector-collection.jsx';
import UpdateForm         from '../get-started/correct-or-update/update-form.jsx';
import OtherText          from '../get-started/correct-or-update/text-form.jsx';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import translations       from '../../i18n';
import Translate          from '../../i18n/translate-tag.jsx';
import {
  otherIsSelected,
  hasSpecifiedChange
}  from '../../helpers/data/card-actions';


const Form = (props) => {
  let locale = props.locale;

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-card-change'>
        <Translate tag='h2' className='question'>
          {translations[locale].intro.correctOrUpdatePage.prompt}
        </Translate>
        <p>You cannot update your medical certificate through this form.</p>

        <form onSubmit={ props.onSubmit }>
          <fieldset>
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
            showIf        = { hasSpecifiedChange(props) }
            translations  = { translations}
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
