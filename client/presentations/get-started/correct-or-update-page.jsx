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
import translations       from '../../i18n';
import { convertToHtml }  from '../../i18n/convert-to-html.jsx';

const text = {
  ID: convertToHtml('p', translations.intro.correctOrUpdatePage.chooseChangeSection.id.explanation),
  DL: convertToHtml('p', translations.intro.correctOrUpdatePage.chooseChangeSection.license.explanation)
};

const Form = (props) => {
  let tag  = getCorrectString(props, text.DL, text.ID);

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-card-change'>
        {convertToHtml('h2', translations.intro.correctOrUpdatePage.prompt, 'question')}
        {tag}
        <form onSubmit={ props.onSubmit }>
          <RadioForm {...props} />
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
