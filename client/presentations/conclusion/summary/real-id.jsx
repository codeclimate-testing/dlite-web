'use strict';

import React              from "react";
import SummaryItem        from './summary-item.jsx';
import PageSummaryLink    from './Page-summary-link.jsx';
import translations       from '../../../i18n';
import {
  gettingRealID
 }  from '../../../helpers/data/real-id';

const Yes = (props) => {
  if (!gettingRealID(props)) { return null; }
  let locale = props.locale;
  return (
    <SummaryItem
      title = { props.title }
      text  = { translations[locale].shared.commonAnswers.yes}
    />
  )
};

const No = (props) => {
  if (gettingRealID(props)) { return null; }
  let locale = props.locale;
  return (
    <SummaryItem
      title = { props.title }
      text  = { translations[locale].shared.commonAnswers.no}
    />
  )
};

const RealID = (props) => {
  if (!props.showIf) { return null; }
  return (
    <PageSummaryLink
      {...props}
    >
      <Yes  {...props} />
      <No   {...props} />
    </PageSummaryLink>
  )
};

export default RealID;