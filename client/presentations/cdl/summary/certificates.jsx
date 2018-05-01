'use strict';

import React              from 'react';
import * as dataPresent   from '../../../helpers/data-present';
import PageSummaryLink    from '../../../containers/page-summary-link.jsx';
import SummaryItem        from '../../conclusion/summary/summary-item.jsx';
import { hasValue }       from '../../../helpers/data/validations';
import {
  showCDLCertificates
} from '../../../helpers/data/cdl';
import Translator       from '../../../i18n/translator-tag.jsx';

const Transit = (props) => {
  const transit = <Translator tag='span' key='transit' translationPath='cdl.endorsmentsPage.certificationSection.certifications.values.transit'/>
  if (props.array.indexOf('transit') === -1) { return null; }
  return <li key='transit'>{transit}</li>
};

const Ambulance = (props) => {
  const ambulance = <Translator tag='span' key='transit' translationPath='cdl.endorsmentsPage.certificationSection.certifications.values.ambulance'/>
  if (props.array.indexOf('ambulance') === -1) { return null; }
  return <li key='ambulance'>{ambulance}</li>
};

const Ham = (props) => {
  const ham = <Translator tag='span' key='transit' translationPath='cdl.endorsmentsPage.certificationSection.certifications.values.ham'/>
  if (props.array.indexOf('ham') === -1) { return null; }
  return <li key='ham'>{ham}</li>
};

const CDLCertificates = (props) => {
  if(!showCDLCertificates(props.cdlCertificates)) { return null; }

  let certificates = (
    <div>
      <Transit     array = {props.cdlCertificates.type} />
      <Ambulance   array = {props.cdlCertificates.type} />
      <Ham         array = {props.cdlCertificates.type} />
    </div>
  );

  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title = 'newExtracted.conclusion.summary.certificates'
        text={certificates}
      />
    </PageSummaryLink>
  )
};

export default CDLCertificates;
