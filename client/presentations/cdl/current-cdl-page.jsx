'use strict';

import React                  from 'react';
import Page                   from '../../containers/page.jsx';
import EnterDLInfo            from '../get-started/current-card-info/enter-info.jsx';
import NavigationButtons      from '../navigation-buttons.jsx';
import Translator             from '../../i18n/translator-tag.jsx';

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='current-card-form'>
        <form onSubmit      = {props.onSubmit }>

          <EnterDLInfo
            {...props}
            textDescription = 'cdl.currentCardInformationPage.cdlNumberLabel'
            showIf          = {true}
          >
            <Translator
              tag             = 'h2'
              className       = 'question'
              translationPath = 'cdl.currentCardInformationPage.prompt'
            />
            <Translator
              tag             = 'p'
              translationPath = 'cdl.currentCardInformationPage.explanation'
            />
          </EnterDLInfo>
          <NavigationButtons
            {...props}
            errorMessage    = { props.validations.all() }
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;
