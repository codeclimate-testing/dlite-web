'use strict';

'use strict';

import React                from 'react';
import Accordion            from '../../../containers/accordion.jsx';
import CdlAction            from './cdl-action.jsx';
import { CurrentCardInfo }  from '../../conclusion/summary/current-card-info.jsx';


const CDLApp = (props) => {
  let cdl         = props.cdl;
  let locale      = props.ui.locale;
  return (
    <Accordion id='cdl-summary' title='My commercial driver license'>
      <CdlAction
        cardAction  = { cdl.cardAction }
        cardChanges = { cdl.cardChanges }
        summary     = 'cdlSummary'
        locale      = { locale }
      />
      <CurrentCardInfo
        currentCardInfo   = { cdl.currentCardInfo }
        locale            = { locale }
        summary           = 'cdlSummary'
        editKey           = 'cdlCurrentCard'
        title             = 'CDL number:'
      />
    </Accordion>
  )
};

export default CDLApp;
