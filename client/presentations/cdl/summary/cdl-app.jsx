'use strict';

import React                from 'react';
import Accordion            from '../../../containers/accordion.jsx';
import CdlAction            from './cdl-action.jsx';


const CDLApp = (props) => {
  let application = props.cdl;
  let locale      = props.ui.locale;
  return (
    <Accordion id='cdl-summary' title='My commercial driver license'>
      <CdlAction
        cardAction  = {application.cardAction}
        summary     = 'cdlSummary'
      />
    </Accordion>
  )
};

export default CDLApp;
