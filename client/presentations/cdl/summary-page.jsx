'use strict';

import React                from 'react';
import Accordion            from '../../containers/accordion.jsx';
import Page                 from '../../containers/page.jsx';
import MyBasics             from './summary/my-basics.jsx';
import CdlAction             from './summary/cdl-action.jsx';

import {
  ErrorMessageBox
} from '../validations.jsx';
import {
  hideMain,
  getErrorMessage
} from '../../helpers/data/summary';

const header = 'Please take a minute to review your answers';

const Contents = (props) => {
  let application = props.cdl;
  return (
    <div className = 'summary'>
      <Accordion id='cdl-summary' title='My commercial driver license'>
        <CdlAction {...application} />
      </Accordion>

      <MyBasics {...application} />


      <Accordion id='self-certification' title='Self certification'>

      </Accordion>

      <Accordion id='history-summary' title='My history' >

      </Accordion>

      <Accordion id='organ-donation-summary' title='Organ donation'>
      </Accordion>

      <Accordion id='voter-registration-summary' title='Voter registration'>
      </Accordion>
    </div>
  )
};

const ButtonComponent = (props) => {
  if(APP_ENV && (APP_ENV === 'development' || APP_ENV === 'test')){
    return (
        <div className='navigation-buttons row' key='save-and-continue'>
          <button type='submit' className='arrow-button forward'>
            Save & Continue
          </button>
        </div>
    );
  }
  return (
      <ContinueButton key="submit"/>
  );
};

const SummaryPage = (props) =>{
  let application = props.cdl;

  return (
    <Page
      {...props}
      sectionKey = 'summary'
    >
      <div className={props.server.apiStatus}/>
      <form onSubmit = {props.onSubmit }  className={hideMain(props)}>
        <h2>{header}</h2>
        <ErrorMessageBox
          errorMessage={getErrorMessage(props)}
        />
        <Contents {...props} />
        <ButtonComponent/>
      </form>
    </Page>
  );
};

export default SummaryPage;
