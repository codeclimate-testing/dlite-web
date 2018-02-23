'use strict';

import React                       from 'react';
import LicenseIssues               from './license-issues.jsx';
import LicenseAndIdHistory         from './license-and-id-history.jsx';
import NamesHistory                from './names-history.jsx';
import MedicalHistory              from './medical-history.jsx';
import VeteransService             from './veterans-service.jsx';
import Accordion                   from '../../../../containers/accordion.jsx';

const MyHistory = (props) => {
  const application = props.application;

  return (
    <Accordion id='history-summary' title='My history' key='history-summary'>
      <MedicalHistory
        medicalHistory      = {application.history.medicalHistory}
        DLApp               = {application.DLApp}
        summary             = 'summary'
      />
      <LicenseAndIdHistory
        licenseAndIdHistory = {application.history.licenseAndIdHistory}
        summary             = 'summary'
      />
      <NamesHistory
        namesHistory        = {application.history.namesHistory}
        summary             = 'summary'
      />
      <LicenseIssues
        licenseIssues       = {application.history.licenseIssues}
        summary             = 'summary'
      />
      <VeteransService
        veteransService     = {application.history.veteransService}
        summary             = 'summary'
      />
    </Accordion>
  );
};

export default MyHistory;