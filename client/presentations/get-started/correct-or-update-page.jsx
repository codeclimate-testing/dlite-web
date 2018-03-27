'use strict';

import React              from 'react';
import RadioForm          from './correct-or-update/radio-form.jsx';
import UpdateForm         from './correct-or-update/update-form.jsx';
import OtherText          from './correct-or-update/text-form.jsx';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import {
  getCorrectString
}  from '../../helpers/data/card-type';
import {
  otherIsSelected,
  hasSpecifiedChange
}  from '../../helpers/data/card-actions';
import Translator        from '../../i18n/translator-tag.jsx';


const Form = (props) => {

  const text = {
    ID: 'intro.correctOrUpdatePage.chooseChangeSection.id.explanation',
    DL: 'intro.correctOrUpdatePage.chooseChangeSection.license.explanation'
  };

  let tagKey    = getCorrectString(props, text.DL, text.ID);
  let formName  = `${getCorrectString(props, 'DL', 'ID')}-`;

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
          translationPath = { tagKey }
        />

        <form onSubmit={ props.onSubmit }>
          <RadioForm
            {...props}
            formName  = { formName }
            selectedValue = { props.cardChanges.correctOrUpdate }
          />
          <UpdateForm
            {...props}
            showIf        = { hasSpecifiedChange(props) }
            formName      = { formName }
          />
          <OtherText
            {...props}
            showIf    = { otherIsSelected(props) }
            formName  = { formName }
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
