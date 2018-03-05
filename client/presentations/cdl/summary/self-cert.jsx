'use strict';

import React                from 'react';
import Accordion            from '../../../containers/accordion.jsx';
import PageSummaryLink      from '../../conclusion/summary/Page-summary-link.jsx';
import SummaryItem          from '../../conclusion/summary/summary-item.jsx';
import { getCert }          from '../../../helpers/data/cdl';
import { hasValue }         from '../../../helpers/data/validations';

const CertItem = (props) => {

  if (!hasValue(props.cdl.certification)) { return null; }

  let certKind    = getCert(props.cdl, 'Interstate', 'Intrastate');

  return (
    <PageSummaryLink
      name    = 'cdlCertification'
      summary = 'cdlSummary'
    >
      <SummaryItem
        title = 'Type of driving:'
        text  = {certKind}
      />
    </PageSummaryLink>
  )
};

const SelfCert = (props) => {

  return (
    <Accordion id='self-certification' title='Self certification'>
      <CertItem {...props} />
    </Accordion>
  )
};

export default SelfCert;
