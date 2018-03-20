'use strict';

import React                from 'react';
import Accordion            from '../../../containers/accordion.jsx';
import PageSummaryLink      from '../../../containers/page-summary-link.jsx';
import SummaryItem          from '../../conclusion/summary/summary-item.jsx';
import { getCert }          from '../../../helpers/data/cdl';
import { hasValue }         from '../../../helpers/data/validations';
import translations         from '../../../i18n';
import Translation          from '../../../i18n/translate-tag.jsx';

const CertItem = (props) => {
  let locale = props.locale;

  if (!hasValue(props.cdl.certification)) { return null; }

  let certKind    = getCert(props.cdl, 'Interstate', 'Intrastate');

  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title = {translations[locale].SummaryPage.typeOfDriving}
        text  = {certKind}
      />
    </PageSummaryLink>
  )
};

const SelfCert = (props) => {
  let locale = props.ui.locale;
  return (
    <Accordion id='self-certification' title='Self certification'>
      <CertItem {...props} locale={locale} editKey='cdlCertification'/>
    </Accordion>
  )
};

export default SelfCert;
