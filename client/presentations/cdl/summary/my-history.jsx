'use strict';

import React                  from 'react';
import Accordion              from '../../../containers/accordion.jsx';
import NamesInfo              from './names-history.jsx';
import OtherStateLicenseInfo  from './other-state-licenses.jsx';
import LicenseIssuesInfo      from './license-issues.jsx';
import MedicalInfo            from '../../conclusion/summary/my-history/medical-history.jsx';
import CurrentDL              from '../../conclusion/summary/my-history/license-and-id-history.jsx';
import VeteransService        from './veterans-service.jsx';
import { hasValue }           from '../../../helpers/data/validations';
import translations           from '../../../i18n';
import Translation            from '../../../i18n/translate-tag.jsx';

const MyHistory = (props) => {
  let cdl       = props.cdl;
  let locale    = props.ui.locale;
  return (
    <Accordion id='history-summary' title={translations[locale].summaryPage.myHistory.title} key='history-summary'>
      <MedicalInfo
        medicalHistory      = { cdl.history.medicalHistory }
        locale              = { locale }
        editKey             = 'cdlMedical'
        showIf              = { hasValue(cdl.history.medicalHistory.hasMedicalCondition) }
      />
      <NamesInfo
        namesHistory        = { cdl.history.namesHistory }
        locale              = { locale }
        editKey             = 'cdlNameHistory'
      />
      <OtherStateLicenseInfo
        otherStateLicenses  = { cdl.history.otherStateLicenses }
        locale              = { locale }
        editKey             = 'cdlOtherStateLicenses'
      />
      <LicenseIssuesInfo
        licenseIssues       = { cdl.history.licenseIssues }
        locale              = { locale }
        editKey             = 'cdlLicenseIssues'
      />
      <VeteransService
        veteransService     = { cdl.history.veteransService}
        locale              = { locale }
      />
      <CurrentDL
        licenseAndIdHistory = { cdl.history.currentDLInfo}
        locale              = { locale }
        editKey             = 'cdlCurrentDL'
        title               = {translations[locale].SummaryPage.currentDlNumberLabel}
      />
    </Accordion>
  )
};

export default MyHistory;
