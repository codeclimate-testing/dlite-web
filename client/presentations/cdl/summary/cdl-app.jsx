'use strict';

import React                from 'react';
import Accordion            from '../../../containers/accordion.jsx';
import CdlAction            from './cdl-action.jsx';


const CDLApp = (props) => {
  let cdl         = props.cdl;
  let locale      = props.ui.locale;
  return (
    <Accordion id='cdl-summary' title='My commercial driver license'>
      <CdlAction
        cardAction  = { cdl.cardAction }
        summary     = 'cdlSummary'
        locale      = { locale }
      />
    </Accordion>
  )
};

export default CDLApp;
