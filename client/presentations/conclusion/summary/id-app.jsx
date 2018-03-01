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
  let application = props.application;
  let locale = props.ui.locale;

  return (
    <Accordion id='id-application-details-summary' title='My ID' key='id-application-details-summary'>
      <IDApplicationNotStarted
        IDApp             = { application.IDApp }
        locale            = { locale }
        summary           = 'summary'
      />
      <IDAction
        IDApp             = { application.IDApp }
        locale            = { locale }
        summary           = 'summary'
      />
      <ReducedOrNoFee
        locale            = { locale }
        summary           = 'summary'
        reducedFee        = { application.IDApp.reducedFee}
      />
      <SeniorID
        locale            = { locale }
        summary           = 'summary'
        seniorID          = {application.IDApp.seniorID}
      />
      <CurrentIDInfo
        IDApp             = { application.IDApp}
        locale            = { locale }
        summary           = 'summary'
        currentCardInfo   = {application.IDApp.currentCard}
      />
      <IDRealID
        IDApp             = { application.IDApp }
        summary           = 'summary'
        realID            = { application.realID }
      />
    </Accordion>
  )
};

export default IDApp;
