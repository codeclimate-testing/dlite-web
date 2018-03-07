'use strict';

import React from 'react';

import Page                   from '../../containers/page.jsx';
import LanguageRadios         from '../language-radios.jsx'
import ContinueButton         from '../continue-button.jsx';
import translations           from '../../i18n';
import Translate              from '../../i18n/translate-tag.jsx';


import {
  hideMain,
  getErrorMessage
} from '../../helpers/data/api';

const Form = (props) => {
  let locale = props.locale;
  let className = `choose-language-form ${hideMain(props)}`;

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className={props.server.apiStatus}/>

      <div className={ className }>
        <Translate tag='h2' className='question'>
          { translations[locale].intro.switchLanguagePage.prompt }
        </Translate>

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
