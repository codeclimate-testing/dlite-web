'use strict';

import React              from 'react';
import ReplacementReason  from './replacement-details/replacement-reason-form.jsx';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import Translator         from '../../i18n/translator-tag.jsx';

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-replacement-detail'>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'intro.replacementReasonPage.prompt'
        />
        <Translator
          tag             = 'p'
          translationPath = 'intro.replacementReasonPage.explanation'
        />
        <form onSubmit={ props.onSubmit }>
          <ReplacementReason {...props} />
          <NavigationButtons
            errorMessage = { props.validations.reason() }
            {...props}
          />
        </form>
      </div>
    </Page>
  );
};

export default Form;
