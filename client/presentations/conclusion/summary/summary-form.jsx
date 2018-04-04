'use strict';

import React                from 'react'
import Translator           from '../../../i18n/translator-tag.jsx';
import SubmitButton         from './submit-button.jsx';

import {
  getErrorMessage
} from '../../../helpers/data/api';

import {
  ErrorMessageBox
} from '../../validations.jsx';

const SummaryForm = (props) => {

  return (
    <div>
      <div className={props.server.apiStatus}/>

      <form
        onSubmit  = { props.onSubmit }
      >
        <Translator
          tag             = 'h2'
          translationPath = 'summaryPage.prompt'
        />

        <div>
          <ErrorMessageBox
            errorMessage={getErrorMessage(props)}
          />
        </div>

        {props.children}

        <SubmitButton
          continueDisabled  = { props.continueDisabled }
        />
      </form>
    </div>
  );
};

export default SummaryForm;
