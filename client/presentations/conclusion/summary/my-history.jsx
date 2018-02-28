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

  return (
    <Accordion id='history-summary' title='My history' key='history-summary'>
      <MedicalHistory
        medicalHistory      = {props.history.medicalHistory}
        DLApp               = {props.DLApp}
      />
      <LicenseAndIdHistory
        licenseAndIdHistory = {props.history.licenseAndIdHistory}
        editKey             = 'addLicenseHistory'
        title               = 'Previous DL/ID card number:'
      />
      <NamesHistory
        namesHistory        = {props.history.namesHistory}
      />
      <LicenseIssues
        licenseIssues       = {props.history.licenseIssues}
      />
      <VeteransService
        veteransService     = {props.history.veteransService}
      />
    </Accordion>
  );
};

export default MyHistory;