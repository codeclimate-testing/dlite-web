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
import translations         from '../../../i18n';
import Translation          from '../../../i18n/translate-tag.jsx';


const CDLApp = (props) => {
  let cdl         = props.cdl;
  let locale      = props.ui.locale;

  return (
    <Accordion id='cdl-summary' title={translations[locale].SummaryPage.MyCDL}>
      <CdlAction
        cardAction  = { cdl.cardAction }
        cardChanges = { cdl.cardChanges }
        locale      = { locale }
        editKey     = 'cdlWdywtdt'
      />
      <RealID
        realID      = { cdl.realID }
        editKey     = 'cdlRealID'
        locale      = { locale }
        title       = {translations[locale].summaryPage.myID.realIDHeading}
        showIf      = { hasValue(cdl.realID) }
      />
      <LicenseClass
        licenseClass      = { cdl.licenseClass }
        locale            = { locale }
        editKey           = 'cdlClass'
      />
      <CurrentCardInfo
        currentCardInfo   = { cdl.currentCardInfo }
        locale            = { locale }
        title             = {translations[locale].SummaryPage.CdlNumberLabel}
        editKey           = 'cdlCurrentCard'
      />
      <Motorcycle
        classM            = { cdl.classM }
        locale            = { locale }
        title             = 'Motorcycle on CDL'
        editKey           = 'motorcycle'
      />
      <CDLEndorsements
        cdlEndorsements   = { cdl.cdlEndorsements }
        locale            = { locale }
        title             = 'Endorsement(s)'
        editKey           = 'cdlEndorsements'
        />
      <CDLCertificates
        cdlCertificates   = { cdl.cdlCertificates }
        locale            = { locale }
        title             = 'Certificates(s)'
        editKey           = 'cdlCertificates'
      />
    </Accordion>
  )
};

export default CDLApp;
