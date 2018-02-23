'use strict';

import React            from "react";
import { hasValue }     from '../../../../helpers/data/validations';
import PageSummaryLink  from '../Page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import translations     from '../../../../i18n';

import {
  gettingRealID,
  isSelected,
  DLAsRealID
 }  from '../../../../helpers/data/real-id';


const Yes = (props) => {
  if (!gettingRealID(props)) { return null; }
  return (
    <SummaryItem
      title='Real-ID Compliant'
      text={translations.shared.commonAnswers.yes}
    />
  )
};

const No = (props) => {
  if (gettingRealID(props)) { return null; }
  return (
    <SummaryItem
      title='Real-ID Compliant'
      text={translations.shared.commonAnswers.no}
    />
  )
};
const DLRealID = (props) => {
  if(!DLAsRealID(props)) { return null; }
  return (
    <PageSummaryLink
      name='realID'
      summary = {props.summary}
    >
      <Yes realID = {props.realID} />
      <No realID = {props.realID} />
    </PageSummaryLink>
  )
};

export default DLRealID;
