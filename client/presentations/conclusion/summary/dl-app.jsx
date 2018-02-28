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
  let locale = props.locale;
  return (
    <Accordion id='driver-license-application-details-summary' title='My Driver License' key='driver-license-application-details-summary'>
      <DLApplicationNotStarted
        {...props}

      />
      <DLAction
        {...props}
      />
      <CurrentDLInfo
        {...props}
        currentCardInfo     = {props.DLApp.currentCard}
      />
      <DLRealID
        {...props}
      />
      <LicenseType
        {...props}

      />
    </Accordion>
  );
};

export default DLApp;