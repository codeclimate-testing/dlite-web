'use strict';

import React              from 'react';
import RadioForm          from './correct-or-update/radio-form.jsx';
import UpdateDLForm         from './correct-or-update/update-dl-form.jsx';
import UpdateIDForm         from './correct-or-update/update-id-form.jsx';
import CorrectForm        from './correct-or-update/correct-form.jsx';
import OtherText          from './correct-or-update/text-form.jsx';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import {
  getCorrectString
}  from '../../helpers/data/card-type';
import {
  otherIsSelected,
  hasSpecifiedChange,
  isCorrecting,
  isUpdating
}  from '../../helpers/data/card-actions';
import { 
  getDL,
  getID
}  from '../../helpers/data/card-type';
import Translator        from '../../i18n/translator-tag.jsx';

const updateDL = (props) => {
  return isUpdating(props) && getDL(props)
}

const updateID = (props) => {
  return isUpdating(props) && getID(props)
}

const Form = (props) => {
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
        <form onSubmit={ props.onSubmit }>
          <RadioForm
            {...props}
            formName  = { formName }
            selectedValue = { props.cardChanges.correctOrUpdate }
          />
          <UpdateDLForm
            {...props}
            showIf        = { updateDL(props)}
            formName      = { formName }
          />
          <UpdateIDForm
            {...props}
            showIf        = { updateID(props)}
            formName      = { formName }
          />
          <CorrectForm
            {...props}
            showIf        = { isCorrecting(props)}
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
