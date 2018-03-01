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
  let application = props.application;
  let locale = props.ui.locale;

  return (
    <Accordion id='history-summary' title='My history' key='history-summary'>
      <MedicalHistory
        DLApp               = { application.DLApp }
        locale              = { locale }
        summary             = 'summary'
        medicalHistory      = { application.history.medicalHistory}
      />
      <LicenseAndIdHistory
        locale              = { locale }
        summary             = 'summary'
        licenseAndIdHistory = {application.history.licenseAndIdHistory}
        editKey             = 'addLicenseHistory'
        title               = 'Previous DL/ID card number:'
      />
      <NamesHistory
        locale              = { locale }
        summary             = 'summary'
        namesHistory        = { application.history.namesHistory}
      />
      <LicenseIssues
        locale              = { locale }
        summary             = 'summary'
        licenseIssues       = {application.history.licenseIssues}
      />
      <VeteransService
        locale              = { locale }
        summary             = 'summary'
        veteransService     = { application.history.veteransService}
      />
    </Accordion>
  );
};

export default MyHistory;