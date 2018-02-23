'use strict';

import React                       from 'react';
import Accordion                   from '../../../containers/accordion.jsx';
import {
  LicenseIssues,
  LicenseAndIdHistory,
  NamesHistory,
  MedicalHistory,
  VeteransService
} from './my-history/index';
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