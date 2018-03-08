'use strict';

import React                  from 'react';
import Accordion              from '../../../containers/accordion.jsx';
import MedicalInfo            from './medical-history.jsx';
import NamesInfo              from './names-history.jsx';
import OtherStateLicenseInfo  from './other-state-licenses.jsx';
import CurrentDL              from '../../conclusion/summary/my-history/license-and-id-history.jsx';

const MyHistory = (props) => {
  let cdl       = props.cdl;
  let locale    = props.ui.locale;
  return (
    <Accordion id='history-summary' title='My history' >
      <MedicalInfo
        medicalHistory      = { cdl.history.medicalHistory }
        locale              = { locale }
      />
      <NamesInfo
        namesHistory        = { cdl.history.namesHistory }
        locale              = { locale }
      />
      <OtherStateLicenseInfo
        otherStateLicenses  = { cdl.history.otherStateLicenses }
        locale              = { locale }
      />
      <CurrentDL
        licenseAndIdHistory = { cdl.history.currentDLInfo}
        locale              = { locale }
        editKey             = 'cdlCurrentDL'
        summary             = 'cdlSummary'
        title               = 'Current DL number:'
      />
    </Accordion>
  )
};

export default MyHistory;
