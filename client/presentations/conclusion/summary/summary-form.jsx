'use strict';

import React                from 'react'
import Translator           from '../../../i18n/translator-tag.jsx';
import SubmitButton         from './submit-button.jsx';

import {
  hideMain,
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
        className ={ hideMain(props) }
      >
        <Translator
          tag             = 'h2'
          translationPath = 'summaryPage.prompt'
        />

        <div className='translation-missing'>
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
