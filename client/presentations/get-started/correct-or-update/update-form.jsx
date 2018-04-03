'use strict';

import React                from 'react';
import CheckboxCollection   from '../../checkbox-selector-collection.jsx';
import CheckboxSelector     from '../../checkbox-selector.jsx';
import UpdateDL             from './update-dl-form.jsx';
import UpdateID             from './update-id-form.jsx';
import {
  getStringByAction
}   from '../../../helpers/data/card-actions';
import {
  updateDL,
  updateID
} from '../../../helpers/data/card-type';
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
          translationPath = 'intro.correctOrUpdatePage.chooseChangeSection.prompt.update'
        />

        <Translator
          tag='p'
          translationPath = 'intro.chooseSelectionPage.explanationMultiCard'
        />
        <UpdateDL
          {...props}
        />
        <UpdateID
          {...props}
        />
    </div>
  )
};

export default Form;
