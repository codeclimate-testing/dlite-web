'use strict';

import React            from "react";
import Translator       from '../../../../i18n/translator-tag.jsx';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import {
  IDAppExistsAndActionChosen
} from '../../../../helpers/data/card-type'

const IDApplicationNotStarted = (props) => {
  document.title = 'Summary of my application';
  if(IDAppExistsAndActionChosen(props)) { return null; }
  return (
    <PageSummaryLink
      {...props}
      linkType = 'summary-add'
    >
      <Translator tag = 'p' translationPath = 'summaryPage.whatImDoing.nothing' />
    </PageSummaryLink>
  );
};

export default IDApplicationNotStarted;
