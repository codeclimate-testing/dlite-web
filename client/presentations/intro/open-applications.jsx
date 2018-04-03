'use strict';

import React                    from 'react';
import Page                     from '../../containers/page.jsx';
import Translator               from '../../i18n/translator-tag.jsx';
import { Applications }         from './card-description.jsx';
import { ErrorMessageBox }      from '../validations.jsx';
import { getErrorMessage }      from '../../helpers/data/api';

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit = { props.onSubmit } className='open-applications'>
        <ErrorMessageBox
          errorMessage = {getErrorMessage({ server: { apiStatus: props.apiStatus }})}
        />
        <Translator
          tag             = 'h2'
          translationPath = 'beforeIntro.idMeReturnPage.welcomeBack'
        />

        <Translator
          tag             = 'p'
          translationPath = 'beforeIntro.idMeReturnPage.youHaveSomeUnfinishedApps'
        />

        <Translator
          tag             = 'p'
          translationPath = 'beforeIntro.idMeReturnPage.youCanStartNewApp'
        />

        <Applications apps= {props.userData.apps} history={props.history}/>

      </form>
    </Page>
  )
};

export default Form;
