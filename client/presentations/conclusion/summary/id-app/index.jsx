'use strict';

import React                        from 'react';
import IDApplicationNotStarted      from './id-application-not-started.jsx';
import SeniorID                     from './senior-id.jsx';
import IDRealID                     from './id-real-id.jsx';
import ReducedOrNoFee               from './reduced-or-no-fee.jsx';
import IDAction                     from './id-action.jsx';
import CurrentIDInfo                from './current-id-info.jsx';
import Accordion                    from '../../../../containers/accordion.jsx';

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
