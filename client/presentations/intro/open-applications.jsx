'use strict';

import React                    from 'react';
import Page                     from '../../containers/page.jsx';
import Translator               from '../../i18n/translator-tag.jsx';
import { Applications }         from './open-applications/card-description.jsx';
import { AddApps }              from './open-applications/add-apps.jsx';
import { ErrorMessageBox }      from '../validations.jsx';
import { getErrorMessage }      from '../../helpers/data/api';
import PageSummaryLink          from '../../containers/page-summary-link.jsx';


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

        <Applications apps= {props.userData.apps} history={props.history}/>

        <hr/>

        <AddApps />

      </form>
    </Page>
  )
};

export default Form;
