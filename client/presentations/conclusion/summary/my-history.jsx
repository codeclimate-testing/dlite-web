'use strict';

import React                        from 'react';
import Accordion                    from '../../../containers/accordion.jsx';
import translations                 from '../../../i18n';
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
        medicalHistory      = { application.history.medicalHistory}
        showIf              = { application.DLApp.isApplying }
        editKey             = 'medicalHistory'
      />
      <LicenseAndIdHistory
        locale              = { locale }
        licenseAndIdHistory = { application.history.licenseAndIdHistory}
        editKey             = 'cardHistory'
        title               = { translations[locale].summaryPage.myHistory.previousCard }
      />
      <NamesHistory
        locale              = { locale }
        translations        = { translations }
        namesHistory        = { application.history.namesHistory}
        editKey             = 'nameHistory'
      />
      <LicenseIssues
        locale              = { locale }
        licenseIssues       = { application.history.licenseIssues}
        editKey             = 'licenseIssues'
      />
      <VeteransService
        locale              = { locale }
        veteransService     = { application.history.veteransService}
        editKey             = 'veterans'
      />
    </Accordion>
  );
};

export default MyHistory;