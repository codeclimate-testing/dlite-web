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
import Translation        from '../../i18n/translate-tag.jsx';


const Form = (props) => {
  let locale = props.locale;
  const text = {
    ID: translations[locale].intro.correctOrUpdatePage.chooseChangeSection.id.explanation,
    DL: translations[locale].intro.correctOrUpdatePage.chooseChangeSection.license.explanation
  };

  let tag  = getCorrectString(props, text.DL, text.ID);
  let formName = `${getCorrectString(props, 'DL', 'ID')}-`;

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-card-change'>
        <Translation tag='h2' className='question'>
          {translations[locale].intro.correctOrUpdatePage.prompt}
        </Translation>

        <Translation tag='p'>
          {tag}
        </Translation>

        <form onSubmit={ props.onSubmit }>
          <RadioForm
            {...props}
            formName  = { formName }
          />
          <UpdateForm
            {...props}
            showIf        = { hasSpecifiedChange(props) }
            translations  = { translations}
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
