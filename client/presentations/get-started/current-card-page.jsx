'use strict';

import React              from 'react';
import Page               from '../../containers/page.jsx';
import EnterInfo          from './current-card-info/enter-info.jsx';
import Translator         from '../../i18n/translator-tag.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';

const Form = (props) => {

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='current-card-form'>

        <form onSubmit={ props.onSubmit }>
          <EnterInfo
            {...props}
            showIf          = { true }
            textDescription = 'intro.currentCardPage.numberLabel'
          >
            <Translator
              tag             = 'h2'
              className       = 'question'
              translationPath = 'intro.currentCardPage.prompt'
            />
            <Translator
              tag             = 'p'
              translationPath = 'intro.currentCardPage.explanation'
            />

          </EnterInfo>

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