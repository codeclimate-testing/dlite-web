'use strict';

import React                from 'react';
import Accordion            from '../../../containers/accordion.jsx';
import CurrentDL            from '../../conclusion/summary/my-history/license-and-id-history.jsx';

const MyHistory = (props) => {
  let cdl       = props.cdl;
  let locale    = props.ui.locale;
  return (
    <Accordion id='history-summary' title='My history' >
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