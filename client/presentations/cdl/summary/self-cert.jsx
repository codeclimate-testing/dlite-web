'use strict';

import React                from 'react';
import Accordion            from '../../../containers/accordion.jsx';
import PageSummaryLink      from '../../../containers/page-summary-link.jsx';
import SummaryItem          from '../../conclusion/summary/summary-item.jsx';
import { hasValue }         from '../../../helpers/data/validations';
import {
  getCert,
  intraState,
  interState
}   from '../../../helpers/data/cdl';

const CertItem = (props) => {
  if (!hasValue(props.cdl.certification)) { return null; }
  let certKind    = getCert(props.cdl, 'Interstate', 'Intrastate');
  if(intraState(props.cdl)) {
    return (
      <PageSummaryLink
        {...props}
      >
        <SummaryItem
          title = 'SummaryPage.typeOfDriving'
          text  = 'newApproved.cdl.selfCertification.values.intrastate'
        />
      </PageSummaryLink>
    )
  } else if(interState(props.cdl)) {
    return (
      <PageSummaryLink
        {...props}
      >
        <SummaryItem
          title = 'SummaryPage.typeOfDriving'
          text  = 'newApproved.cdl.selfCertification.values.interstate'
        />
      </PageSummaryLink>
    )
  }
};

const SelfCert = (props) => {
  return (
    <Accordion
      id    = 'self-certification'
      title = 'sections.selfCertification'
      key   = 'self-certification'
    >
      <CertItem {...props}  editKey='cdlCertification'/>
    </Accordion>
  )
};

export default SelfCert;
