'use strict';

import React                from 'react';
import Accordion            from '../../../containers/accordion.jsx';
import PageSummaryLink      from '../../../containers/page-summary-link.jsx';
import SummaryItem          from '../../conclusion/summary/summary-item.jsx';
import { getCert }          from '../../../helpers/data/cdl';
import { hasValue }         from '../../../helpers/data/validations';

const CertItem = (props) => {

  if (!hasValue(props.cdl.certification)) { return null; }

  let certKind    = getCert(props.cdl, 'Interstate', 'Intrastate');

  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title = 'SummaryPage.typeOfDriving'
        text  = {certKind}
      />
    </PageSummaryLink>
  )
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
