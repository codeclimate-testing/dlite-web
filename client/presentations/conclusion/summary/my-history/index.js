'use strict';

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
      />
      <LicenseAndIdHistory
        licenseAndIdHistory = {application.history.licenseAndIdHistory}
      />
      <NamesHistory
        namesHistory        = {application.history.namesHistory}
      />
      <LicenseIssues
        licenseIssues       = {application.history.licenseIssues}
      />
      <VeteransService
        veteransService     = {application.history.veteransService}
      />
    </Accordion>
  );
};

export default MyHistory;