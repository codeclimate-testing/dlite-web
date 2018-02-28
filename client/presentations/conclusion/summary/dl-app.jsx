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
  let locale          = props.ui.locale;
  const application   = props.application;
  return (
    <Accordion id='driver-license-application-details-summary' title='My Driver License' key='driver-license-application-details-summary'>
      <DLApplicationNotStarted
        {...application}
        summary           = 'summary'
        locale            = { locale }
      />
      <DLAction
        {...application}
        summary             = 'summary'
        locale              = { locale }
      />
      <CurrentDLInfo
        {...application}
        currentCardInfo     = {application.DLApp.currentCard}
        summary             = 'summary'
        locale              = { locale }
      />
      <DLRealID
        {...application}
        summary             = 'summary'
        locale              = { locale }
      />
      <LicenseType
        {...application}
        summary             = 'summary'
        locale              = { locale }
      />
    </Accordion>
  );
};

export default DLApp;