'use strict';

import React              from 'react';
import * as dataPresent   from '../../../helpers/data-present';
import PageSummaryLink    from '../../../containers/page-summary-link.jsx';
import SummaryItem        from '../../conclusion/summary/summary-item.jsx';
import { hasValue }       from '../../../helpers/data/validations';
import {
  showCDLCertificates
} from '../../../helpers/data/cdl';

const Transit = (props) => {
  const transit = 'Verification of Transit Training (VTT)';
  if (props.array.indexOf('transit') === -1) { return null; }
  return <li key='transit'>{transit}</li>
};

const Ambulance = (props) => {
  const ambulance = 'Ambulance driver';
  if (props.array.indexOf('ambulance') === -1) { return null; }
  return <li key='ambulance'>{ambulance}</li>
};

const Ham = (props) => {
  const ham = 'HAM';
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
        title='Certificates(s)'
        text={certificates}
      />
    </PageSummaryLink>
  )
};

export default CDLCertificates;