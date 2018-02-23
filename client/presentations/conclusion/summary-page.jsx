'use strict'

import React                from 'react'
import Page                 from '../../containers/page.jsx';
import { ageChecks }        from '../../helpers/calculate-age';
import contents             from './summary/index';

import {
  hideMain,
  getErrorMessage
} from '../../helpers/data/summary';

import {
  ErrorMessageBox
} from '../validations.jsx';


const header = 'Please take a minute to review your answers';


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
          <h2 className='question'>{header}</h2>

          <div className='translation-missing'>
            <ErrorMessageBox
              errorMessage={getErrorMessage(props)}
            />
          </div>

          <Content {...props} />
        </form>
      </Page>
  )
};

export default SummaryPage;
