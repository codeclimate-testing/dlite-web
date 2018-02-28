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
  let locale        = props.ui.locale;
  return (
    <Accordion id='history-summary' title='My history' key='history-summary'>
      <MedicalHistory
        medicalHistory      = {application.history.medicalHistory}
        DLApp               = {application.DLApp}
        summary             = 'summary'
        locale              = { locale }
      />
      <LicenseAndIdHistory
        licenseAndIdHistory = {application.history.licenseAndIdHistory}
        summary             = 'summary'
        locale              = { locale }
      />
      <NamesHistory
        namesHistory        = {application.history.namesHistory}
        summary             = 'summary'
        locale              = { locale }
      />
      <LicenseIssues
        licenseIssues       = {application.history.licenseIssues}
        summary             = 'summary'
        locale              = { locale }
      />
      <VeteransService
        veteransService     = {application.history.veteransService}
        summary             = 'summary'
        locale              = { locale }
      />
    </Accordion>
  );
};

export default MyHistory;