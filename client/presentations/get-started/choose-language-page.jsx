'use strict';

import React                      from 'react';
import Page                       from '../../containers/page.jsx';
import LanguageRadios             from '../language-radios.jsx'
import { ContinueLanguageButton } from '../continue-button.jsx';
import Translator                 from '../../i18n/translator-tag.jsx';


import {
  getErrorMessage
} from '../../helpers/data/api';

const Form = (props) => {
  let className = `choose-language-form`;

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className={props.server.apiStatus}/>

      <div className={ className }>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'intro.switchLanguagePage.prompt'
          tabIndex        = '0'
        />

        <form onSubmit={ props.onSubmit } >
          <LanguageRadios
            {...props}
            name='language'
          />
          <ContinueLanguageButton language={props.language}/>
        </form>
      </div>
    </Page>
  )
};

export default Form;
