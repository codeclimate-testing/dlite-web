'use strict';

import React            from "react";
import { hasValue }     from '../../../../helpers/data/validations';
import PageSummaryLink  from '../Page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import translations     from '../../../../i18n';

import {
  IDAppExists
} from '../../../../helpers/data/card-type';
import {
  IDgettingRealID
} from '../../../../helpers/data/real-id';

const Yes = (props) => {
  if (!IDgettingRealID(props)) { return null; }
  let locale = props.locale;
  return (
    <SummaryItem
      title='Real-ID Compliant'
      text={translations[locale].shared.commonAnswers.yes}
    />
  )
};

const No = (props) => {
  if (IDgettingRealID(props)) { return null; }
  let locale = props.locale;
  return (
    <SummaryItem
      title='Real-ID Compliant'
      text={translations[locale].shared.commonAnswers.no}
    />
  )
};

const IDRealID = (props) => {
  if(!IDAppExists(props)) { return null; }

  return (
    <PageSummaryLink
      {...props}
      name    = 'realID'

    >
      <Yes  IDApp = {application.IDApp} locale = {locale}/>
      <No   IDApp = {application.IDApp} locale = {locale}/>
    </PageSummaryLink>
  )
};

export default IDRealID;
