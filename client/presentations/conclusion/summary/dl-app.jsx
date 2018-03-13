'use strict';

import React                       from 'react';
import Accordion                   from '../../../containers/accordion.jsx';
import RealID                      from './real-id.jsx';
import {
  DLApplicationNotStarted,
  DLAction,
  CurrentDLInfo,
  LicenseType
} from './dl-app/index';

const DLApp = (props) => {
  let locale      = props.ui.locale;
  let application = props.application;
  let cardType    = 'DL';
  return (
    <Accordion id='driver-license-application-details-summary' title='My Driver License' key='driver-license-application-details-summary'>
      <DLApplicationNotStarted
        DLApp             = { application.DLApp }
        locale            = { locale }
        cardType          = { cardType }
        editKey           = 'wdywtdt'
      />
      <DLAction
        DLApp             = { application.DLApp }
        locale            = { locale }
        editKey           = 'wdywtdt'
        cardType          = { cardType }
      />
      <CurrentDLInfo
        DLApp             = { application.DLApp }
        locale            = { locale }
        editKey           = 'currentCardInfo'
        cardType          = { cardType }
      />
      <RealID
        showIf            = { application.DLApp.isApplying }
        realID            = { application.DLApp.realID }
        locale            = { locale }
        editKey           = 'realID'
        title             = 'Real-ID Compliant'
        cardType          = { cardType }
      />
      <LicenseType
        DLApp             = { application.DLApp }
        locale            = { locale }
        editKey           = 'chooseLicenseClass'
        cardType          = { cardType }
      />
    </Accordion>
  );
};

export default DLApp;