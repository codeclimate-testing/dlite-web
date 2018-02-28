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
  return (
    <Accordion id='id-application-details-summary' title='My ID' key='id-application-details-summary'>
      <IDApplicationNotStarted
        {...props}
      />
      <IDAction
        {...props}
      />
      <ReducedOrNoFee
        {...props}
        reducedFee        = {props.IDApp.reducedFee}
      />
      <SeniorID
        seniorID          = {props.IDApp.seniorID}
      />
      <CurrentIDInfo
        {...props}
        currentCardInfo   = {props.IDApp.currentCard}
      />
      <IDRealID
        {...props}
      />
    </Accordion>
  )
};

export default IDApp;
