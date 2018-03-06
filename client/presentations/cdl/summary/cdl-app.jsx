'use strict';

import React                from 'react';
import Accordion            from '../../../containers/accordion.jsx';
import CdlAction            from './cdl-action.jsx';
import LicenseClass         from './license-class.jsx';
import { CurrentCardInfo }  from '../../conclusion/summary/current-card-info.jsx';
import RealID               from '../../conclusion/summary/real-id.jsx';
import { hasValue }         from '../../../helpers/data/validations';
import Motorcycle           from './motorcycle.jsx';
import CDLEndorsements         from './endorsements.jsx';


const CDLApp = (props) => {
  let cdl         = props.cdl;
  let locale      = props.ui.locale;
  return (
    <Accordion id='cdl-summary' title='My commercial driver license'>
      <CdlAction
        cardAction  = { cdl.cardAction }
        cardChanges = { cdl.cardChanges }
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
      <LicenseClass
        licenseClass      = { cdl.licenseClass }
        locale            = { locale }
      />
      <CurrentCardInfo
        currentCardInfo   = { cdl.currentCardInfo }
        locale            = { locale }
        summary           = 'cdlSummary'
        editKey           = 'cdlCurrentCard'
        title             = 'CDL number:'
      />
      <Motorcycle
        classM            = { cdl.classM }
        locale            = { locale }
        title             = 'Motorcycle on CDL'
      />
      <CDLEndorsements
        cdlEndorsements   = { cdl.cdlEndorsements }
        locale            = { locale }
        title             = 'Endorsement(s)'
      />
    </Accordion>
  )
};

export default CDLApp;
