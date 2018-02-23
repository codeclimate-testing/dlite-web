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
  const application = props.application;
  return (
    <Accordion id='driver-license-application-details-summary' title='My Driver License' key='driver-license-application-details-summary'>
      <DLApplicationNotStarted  {...application}
        summary             = 'summary'
      />
      <DLAction                 {...application}
        summary             = 'summary'
      />
      <CurrentDLInfo            {...application}
        currentCardInfo     = {application.DLApp.currentCard}
        summary             = 'summary'
      />
      <DLRealID                 {...application}
        summary             = 'summary'
      />
      <LicenseType              {...application}
        summary             = 'summary'
      />
    </Accordion>
  );
};

export default DLApp;