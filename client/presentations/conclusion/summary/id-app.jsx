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
  const application = props.application;
  return (
    <Accordion id='id-application-details-summary' title='My ID' key='id-application-details-summary'>
      <IDApplicationNotStarted  {...application}
        summary           = 'summary'
      />
      <IDAction                 {...application}
        summary           = 'summary'
      />
      <ReducedOrNoFee           {...application}
        reducedFee        = {application.IDApp.reducedFee}
        summary           = 'summary'
      />
      <SeniorID
        seniorID          = {application.IDApp.seniorID}
        summary           = 'summary'
      />
      <CurrentIDInfo            {...application}
        summary           = 'summary'
        currentCardInfo={application.IDApp.currentCard}
      />
      <IDRealID                 {...application}
        summary           = 'summary'
      />
    </Accordion>
  )
};

export default IDApp;
