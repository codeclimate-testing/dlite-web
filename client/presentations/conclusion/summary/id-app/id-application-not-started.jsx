'use strict';

import React            from "react";
import translations     from '../../../../i18n';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import {
  IDAppExists
} from '../../../../helpers/data/card-type'

const IDApplicationNotStarted = (props) => {
  let locale = props.locale;
  document.title = 'Summary of my application';
  if(IDAppExists(props)) { return null; }
  return (
    <PageSummaryLink
      {...props}
      add       = { true }
    >
      <p>{translations[locale].summaryPage.whatImDoing.nothing}</p>
    </PageSummaryLink>
  );
};

export default IDApplicationNotStarted;
