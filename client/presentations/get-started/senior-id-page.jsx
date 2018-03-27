'use strict';

import React from 'react';

import RadioCollection    from '../radio-selector-collection.jsx';
import radioYesNoGroup    from '../radio-yes-no-group.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import Page               from '../../containers/page.jsx';
import Translator         from '../../i18n/translator-tag.jsx';

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit={props.onSubmit} className='senior-id-form'>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'intro.seniorIdPage.prompt'
        />
        <Translator
          tag             = 'p'
          translationPath = 'intro.seniorIdPage.explanation'
        />

        <hr />

        <div className='row'>
          <fieldset role='group' aria-label='Senior ID choice'>
            <RadioCollection
              {...props}
              name = 'seniorID'
              onBlur = { props.onBlurValidate }
              errorMessage = {props.validations.seniorID() }
            >
              { radioYesNoGroup() }
            </RadioCollection>
          </fieldset>
        </div>

        <NavigationButtons
          errorMessage = {props.validations.seniorID() }
          {...props}
        />
      </form>
    </Page>
  )
};

export default Form;
