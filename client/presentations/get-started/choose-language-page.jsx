'use strict';

import React from 'react';

import Page                   from '../../containers/page.jsx';
import LanguageRadios         from '../language-radios.jsx'
import ContinueButton         from '../continue-button.jsx';
import translations           from '../../i18n';

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-card-form'>
        <h2 className='question'>{translations.intro.switchLanguagePage.prompt}</h2>

        <form onSubmit={ props.onSubmit } >

          <LanguageRadios
            {...props}
            name='appLanguage'
          />
          <ContinueButton />
        </form>
      </div>
    </Page>
  )
};

export default Form;
