'use strict';

import React                        from 'react';
import Accordion                    from '../../../containers/accordion.jsx';
import RealID                       from './real-id.jsx';
import {
  IDApplicationNotStarted,
  SeniorID,
  ReducedOrNoFee,
  IDAction,
  CurrentIDInfo
} from './id-app/index';

const IDApp = (props) => {
  let application = props.application;
  let locale = props.ui.locale;
  let cardType = 'ID';

  return (
    <Accordion id='id-application-details-summary' title='My ID' key='id-application-details-summary'>
      <IDApplicationNotStarted
        IDApp             = { application.IDApp }
        locale            = { locale }
        editKey           = 'wdywtdt'
        cardType          = { cardType }
      />
      <IDAction
        IDApp             = { application.IDApp }
        locale            = { locale }
        editKey           = 'wdywtdt'
        cardType          = { cardType }
      />
      <ReducedOrNoFee
        locale            = { locale }
        reducedFee        = { application.IDApp.reducedFee}
        editKey           = 'reducedFeeID'
        cardType          = { cardType }
      />
      <SeniorID
        locale            = { locale }
        seniorID          = { application.IDApp.seniorID}
        editKey           = 'seniorID'
        cardType          = { cardType }
      />
      <CurrentIDInfo
        IDApp             = { application.IDApp}
        locale            = { locale }
        editKey           = 'currentCardInfo'
        cardType          = { cardType }
      />
      <RealID
        showIf            = { application.IDApp.isApplying }
        realID            = { application.IDApp.realID }
        locale            = { locale }
        editKey           = 'realID'
        title             = 'Real-ID Compliant'
        cardType          = { cardType }
      />
    </Accordion>
  )
};

export default IDApp;
