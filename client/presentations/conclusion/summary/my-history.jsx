'use strict';

import React                        from 'react';
import Accordion                    from '../../../containers/accordion.jsx';
import Translator                   from '../../../i18n';

import {
  LicenseIssues,
  LicenseAndIdHistory,
  NamesHistory,
  MedicalHistory,
  VeteransService
} from './my-history/index';

const MyHistory = (props) => {
  let application = props.application;

  return (
    <Accordion
      id    = 'history-summary'
      title = 'summaryPage.myHistory.title'
      key   = 'history-summary'
    >
      <MedicalHistory
        DLApp               = { application.DLApp }
        medicalHistory      = { application.history.medicalHistory}
        showIf              = { application.DLApp.isApplying }
        editKey             = 'medicalHistory'
      />
      <LicenseAndIdHistory
        licenseAndIdHistory = { application.history.licenseAndIdHistory}
        editKey             = 'cardHistory'
        title               = 'summaryPage.myHistory.previousCard'
      />
      <NamesHistory
        namesHistory        = { application.history.namesHistory}
        editKey             = 'nameHistory'
      />
      <LicenseIssues
        licenseIssues       = { application.history.licenseIssues}
        editKey             = 'licenseIssues'
      />
      <VeteransService
        veteransService     = { application.history.veteransService}
        editKey             = 'veterans'
      />
    </Accordion>
  );
};

export default MyHistory;
