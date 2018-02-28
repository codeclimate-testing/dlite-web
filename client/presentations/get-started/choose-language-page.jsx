'use strict';

import React from 'react';

import Page                   from '../../containers/page.jsx';
import LanguageRadios         from '../language-radios.jsx'
import ContinueButton         from '../continue-button.jsx';
import translations           from '../../i18n';
import { convertToHtml }      from '../../i18n/convert-to-html.jsx';

const Form = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-language-form'>
        {convertToHtml('h2', translations[locale].intro.switchLanguagePage.prompt, 'question')}

        <form onSubmit={ props.onSubmit } >

          <LanguageRadios
            {...props}
            name='appLanguage'
          />
          <ContinueButton
            locale = { locale }
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;
