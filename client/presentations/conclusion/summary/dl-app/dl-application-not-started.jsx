'use strict';

import React                from "react";
import Translator           from '../../../../i18n/translator-tag.jsx';
import PageSummaryLink      from '../../../../containers/page-summary-link.jsx';

import {
  DLAppExists
} from '../../../../helpers/data/card-type'

const DLApplicationNotStarted = (props) => {
  document.title = 'Summary of my application';
  if(DLAppExists(props)) { return null; }

  return (
    <PageSummaryLink
      {...props}
      add       = { true }
    >
      <Translator
        tag             = 'p'
        translationPath = 'summaryPage.whatImDoing.nothing'
      />
    </PageSummaryLink>
  );
};

export default DLApplicationNotStarted;

