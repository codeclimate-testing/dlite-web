'use strict';

import React                from 'react'
import Translate            from '../../../i18n/translate-tag.jsx';
import translations         from '../../../i18n';
import SubmitButton         from './submit-button.jsx';

import {
  hideMain,
  getErrorMessage
} from '../../../helpers/data/summary';

import {
  ErrorMessageBox
} from '../../validations.jsx';

const SummaryForm = (props) => {
  let locale = props.ui.locale;
  return (
    <div>
      <div className={props.server.apiStatus}/>

      <form
        onSubmit  = { props.onSubmit }
        className ={hideMain(props)}
      >
        <Translate tag='h2'>
          { translations[locale].summaryPage.prompt}
        </Translate>

        <div className='translation-missing'>
          <ErrorMessageBox
            errorMessage={getErrorMessage(props)}
          />
        </div>

        {props.children}

        <SubmitButton
          locale            = { locale }
          continueDisabled  = { props.continueDisabled }
        />
      </form>
    </div>
  );
};

export default SummaryForm;