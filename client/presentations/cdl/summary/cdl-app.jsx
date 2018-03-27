'use strict';

import React                from 'react';
import Accordion            from '../../../containers/accordion.jsx';
import CdlAction            from './cdl-action.jsx';
import LicenseClass         from './license-class.jsx';
import { CurrentCardInfo }  from '../../conclusion/summary/current-card-info.jsx';
import RealID               from '../../conclusion/summary/real-id.jsx';
import { hasValue }         from '../../../helpers/data/validations';
import Motorcycle           from './motorcycle.jsx';
import CDLEndorsements      from './endorsements.jsx';
import CDLCertificates      from './certificates.jsx';

const CDLApp = (props) => {
  let cdl         = props.cdl;

  return (
    <Accordion
      id    = 'cdl-summary'
      title = 'SummaryPage.MyCDL'
    >
      <CdlAction
        cardAction  = { cdl.cardAction }
        cardChanges = { cdl.cardChanges }
        editKey     = 'cdlWdywtdt'
      />
      <RealID
        realID      = { cdl.realID }
        editKey     = 'cdlRealID'
        title       = 'summaryPage.myID.realIDHeading'
        showIf      = { hasValue(cdl.realID) }
      />
      <LicenseClass
        licenseClass      = { cdl.licenseClass }
        editKey           = 'cdlClass'
      />
      <CurrentCardInfo
        currentCardInfo   = { cdl.currentCardInfo }
        title             = 'SummaryPage.CdlNumberLabel'
        editKey           = 'cdlCurrentCard'
      />
      <Motorcycle
        classM            = { cdl.classM }
        title             = 'Motorcycle on CDL'
        editKey           = 'motorcycle'
      />
      <CDLEndorsements
        cdlEndorsements   = { cdl.cdlEndorsements }
        title             = 'Endorsement(s)'
        editKey           = 'cdlEndorsements'
        />
      <CDLCertificates
        cdlCertificates   = { cdl.cdlCertificates }
        title             = 'Certificates(s)'
        editKey           = 'cdlCertificates'
      />
    </Accordion>
  )
};

export default CDLApp;
