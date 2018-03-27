'use strict';

import React                       from 'react';
import Accordion                   from '../../../containers/accordion.jsx';
import RealID                      from './real-id.jsx';
import Translator                  from '../../../i18n/translator-tag.jsx';
import {
  DLApplicationNotStarted,
  DLAction,
  CurrentDLInfo,
  LicenseType
} from './dl-app/index';

const DLApp = (props) => {
  let application = props.application;
  let cardType    = 'DL';
  return (
    <Accordion
      id      = 'driver-license-application-details-summary'
      title   = 'summaryPage.myDL.title'
      key     = 'driver-license-application-details-summary'
    >
      <DLApplicationNotStarted
        DLApp             = { application.DLApp }
        cardType          = { cardType }
        editKey           = 'wdywtdt'
      />
      <DLAction
        DLApp             = { application.DLApp }
        editKey           = 'wdywtdt'
        cardType          = { cardType }
      />
      <CurrentDLInfo
        DLApp             = { application.DLApp }
        editKey           = 'currentCardInfo'
        cardType          = { cardType }
      />
      <RealID
        showIf            = { application.DLApp.isApplying }
        realID            = { application.DLApp.realID }
        editKey           = 'realID'
        title             = 'Real-ID Compliant'
        cardType          = { cardType }
      />
      <LicenseType
        DLApp             = { application.DLApp }
        editKey           = 'chooseLicenseClass'
        cardType          = { cardType }
      />
    </Accordion>
  );
};

export default DLApp;
