'use strict';

import React            from "react";
import { hasValue }     from '../../../../helpers/data/validations';
import PageSummaryLink  from '../Page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import translations     from '../../../../i18n';

import {
  DLAppExists
} from '../../../../helpers/data/card-type';

import {
  DLgettingRealID
 }  from '../../../../helpers/data/real-id';


const Yes = (props) => {
  if (!DLgettingRealID(props)) { return null; }
  let locale = props.locale;
  return (
    <SummaryItem
      title='Real-ID Compliant'
      text={translations[locale].shared.commonAnswers.yes}
    />
  )
};

const No = (props) => {
  if (DLgettingRealID(props)) { return null; }
  let locale = props.locale;
  return (
    <SummaryItem
      title='Real-ID Compliant'
      text={translations[locale].shared.commonAnswers.no}
    />
  )
};
const DLRealID = (props) => {
  if(!DLAppExists(props)) { return null; }
  let locale = props.locale;
  return (
    <PageSummaryLink
      {...props}
      name='addDLRealID'
    >
      <Yes  DLApp = {props.DLApp}   locale = {locale}/>
      <No   DLApp = {props.DLApp}   locale = {locale}/>
    </PageSummaryLink>
  )
};

export default DLRealID;
