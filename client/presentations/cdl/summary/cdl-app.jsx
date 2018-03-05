'use strict';

'use strict';

import React                from 'react';
import Accordion            from '../../../containers/accordion.jsx';
import CdlAction            from './cdl-action.jsx';
import { CurrentCardInfo }  from '../../conclusion/summary/current-card-info.jsx';
import RealID               from '../../conclusion/summary/real-id.jsx';
import { hasValue }         from '../../../helpers/data/validations';

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
      <RealID
        realID      = { cdl.realID }
        summary     = 'cdlSummary'
        name        = 'cdlRealID'
        locale      = { locale }
        title       = 'Real ID:'
        showIf      = { hasValue(cdl.realID) }
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
