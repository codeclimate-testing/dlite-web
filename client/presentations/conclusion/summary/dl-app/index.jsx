'use strict';

import React                       from 'react';
import DLApplicationNotStarted     from './dl-application-not-started.jsx';
import DLRealID                    from './dl-real-id.jsx';
import DLAction                    from './dl-action.jsx';
import LicenseType                 from './license-type.jsx';
import CurrentDLInfo               from './current-dl-info.jsx';
import Accordion                   from '../../../../containers/accordion.jsx';


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