'use strict';

import React                        from 'react';
import Accordion                    from '../../../containers/accordion.jsx';
import {
  IDApplicationNotStarted,
  SeniorID,
  IDRealID,
  ReducedOrNoFee,
  IDAction,
  CurrentIDInfo
} from './id-app/index';

const IDApp = (props) => {
  let locale          = props.ui.locale;
  const application   = props.application;
  return (
    <Accordion id='id-application-details-summary' title='My ID' key='id-application-details-summary'>
      <IDApplicationNotStarted
        {...application}
        summary           = 'summary'
        locale            = { locale }
      />
      <IDAction
        {...application}
        summary           = 'summary'
        locale            = { locale }
      />
      <ReducedOrNoFee
        {...application}
        reducedFee        = {application.IDApp.reducedFee}
        summary           = 'summary'
        locale            = { locale }
      />
      <SeniorID
        seniorID          = {application.IDApp.seniorID}
        summary           = 'summary'
        locale            = { locale }
      />
      <CurrentIDInfo
        {...application}
        summary           = 'summary'
        locale            = { locale }
        currentCardInfo   = {application.IDApp.currentCard}
      />
      <IDRealID
        {...application}
        summary           = 'summary'
        locale            = { locale }
      />
    </Accordion>
  )
};

export default IDApp;
