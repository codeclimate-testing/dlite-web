'use strict';

import React                from "react";
import translations         from '../../../../i18n';
import PageSummaryLink      from '../../../../containers/page-summary-link.jsx';

import {
  DLAppExists
} from '../../../../helpers/data/card-type'

const DLApplicationNotStarted = (props) => {
  let locale = props.locale;
  document.title = 'Summary of my application';
  if(DLAppExists(props)) { return null; }

  return (
    <PageSummaryLink
      {...props}
      add       = { true }
    >
      <p>{translations[locale].summaryPage.whatImDoing.nothing}</p>
    </PageSummaryLink>
  );
};

export default DLApplicationNotStarted;

