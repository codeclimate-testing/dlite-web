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
import Translator                   from '../../../i18n/translator-tag.jsx';

const IDApp = (props) => {
  let application = props.application;
  let cardType = 'ID';

  return (
    <Accordion
      id    = 'id-application-details-summary'
      title = 'summaryPage.myID.title'
      key   = 'id-application-details-summary'
    >
      <IDApplicationNotStarted
        IDApp             = { application.IDApp }
        editKey           = 'wdywtdt'
        cardType          = { cardType }
      />
      <IDAction
        IDApp             = { application.IDApp }
        editKey           = 'wdywtdt'
        cardType          = { cardType }
      />
      <ReducedOrNoFee
        reducedFee        = { application.IDApp.reducedFee}
        editKey           = 'reducedFeeID'
        cardType          = { cardType }
      />
      <SeniorID
        seniorID          = { application.IDApp.seniorID}
        editKey           = 'seniorID'
        cardType          = { cardType }
      />
      <CurrentIDInfo
        IDApp             = { application.IDApp}
        editKey           = 'currentCardInfo'
        cardType          = { cardType }
      />
      <RealID
        showIf            = { application.IDApp.isApplying }
        realID            = { application.IDApp.realID }
        editKey           = 'realID'
        title             = 'newExtracted.conclusion.summary.realIDCompliant'
        cardType          = { cardType }
      />
    </Accordion>
  )
};

export default IDApp;
