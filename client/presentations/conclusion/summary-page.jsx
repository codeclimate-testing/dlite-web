'use strict'

import React                from 'react'
import Page                 from '../../containers/page.jsx';
import { ageChecks }        from '../../helpers/calculate-age';
import Content              from './summary/body.jsx';
import Translate            from '../../i18n/translate-tag.jsx';
import translations         from '../../i18n';

import {
  hideMain,
  getErrorMessage
} from '../../helpers/data/summary';

import {
  ErrorMessageBox
} from '../validations.jsx';


const SummaryPage = (props) => {
  return (
      <Page
        {...props}
        sectionKey  ='summary'
      >
        <div className={props.server.apiStatus}/>

        <form
          onSubmit  = { props.onSubmit }
          className ={hideMain(props)}
        >
          <Translate tag='h2'>
            { translations.summaryPage.prompt}
          </Translate>

          <div className='translation-missing'>
            <ErrorMessageBox
              errorMessage={getErrorMessage(props)}
            />
          </div>

          <Content
            {...props}
            summary='summary'
          />
        </form>
      </Page>
  )
};

export default SummaryPage;
