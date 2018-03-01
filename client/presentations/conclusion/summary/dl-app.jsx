'use strict';

import React                       from 'react';
import Accordion                   from '../../../containers/accordion.jsx';
import {
  DLApplicationNotStarted,
  DLAction,
  CurrentDLInfo,
  DLRealID,
  LicenseType
} from './dl-app/index';

const DLApp = (props) => {
  let locale      = props.ui.locale;
  let application = props.application;
  return (
    <Accordion id='driver-license-application-details-summary' title='My Driver License' key='driver-license-application-details-summary'>
      <DLApplicationNotStarted
        DLApp             = { application.DLApp }
        locale            = { locale }
        summary           = 'summary'
      />
      <DLAction
        DLApp             = { application.DLApp }
        locale            = { locale }
        summary           = 'summary'
      />
      <CurrentDLInfo
        DLApp             = { application.DLApp }
        currentCardInfo   = { application.DLApp.currentCard}
        locale            = { locale }
        summary           = 'summary'
      />
      <DLRealID
        DLApp             = { application.DLApp }
        locale            = { locale }
        summary           = 'summary'
        realID            = { application.realID }
      />
      <LicenseType
        DLApp             = { application.DLApp }
        locale            = { locale }
        summary           = 'summary'
      />
    </Accordion>
  );
};

export default DLApp;