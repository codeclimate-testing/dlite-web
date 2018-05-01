'use strict';

import React                  from 'react';
import Accordion              from '../../../containers/accordion.jsx';
import OtherStateLicenseInfo  from './other-state-licenses.jsx';
import MedicalInfo            from '../../conclusion/summary/my-history/medical-history.jsx';
import NamesInfo              from '../../conclusion/summary/my-history/names-history.jsx';
import LicenseIssuesInfo      from '../../conclusion/summary/my-history/license-issues.jsx';
import CurrentDL              from '../../conclusion/summary/my-history/license-and-id-history.jsx';
import VeteransService        from './veterans-service.jsx';
import { hasValue }           from '../../../helpers/data/validations';

const MyHistory = (props) => {
  let cdl       = props.cdl;
  return (
    <Accordion
      id    = 'history-summary'
      title = 'summaryPage.myHistory.title'
      key   = 'history-summary'
    >
      <MedicalInfo
        medicalHistory      = { cdl.history.medicalHistory }
        editKey             = 'cdlMedical'
        showIf              = { hasValue(cdl.history.medicalHistory.hasMedicalCondition) }
      />
      <NamesInfo
        namesHistory        = { cdl.history.namesHistory }
        editKey             = 'cdlNameHistory'
      />
      <OtherStateLicenseInfo
        otherStateLicenses  = { cdl.history.otherStateLicenses }
        editKey             = 'cdlOtherStateLicenses'
      />
      <LicenseIssuesInfo
        licenseIssues       = { cdl.history.licenseIssues }
        editKey             = 'cdlLicenseIssues'
      />
      <VeteransService
        veteransService     = { cdl.history.veteransService}
        editKey             = 'cdlVeterans'
      />
      <CurrentDL
        licenseAndIdHistory = { cdl.history.currentDLInfo}
        editKey             = 'cdlCurrentDL'
        title               = 'SummaryPage.currentDlNumberLabel'
      />
    </Accordion>
  )
};

export default MyHistory;
