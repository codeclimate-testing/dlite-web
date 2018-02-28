'use strict';

import React            from 'react';
import PageSummaryLink  from '../../conclusion/summary/Page-summary-link.jsx';
import {
  New,
  Renew,
  Replace,
  Correct,
  Update
} from '../../conclusion/summary/actions.jsx';

const CdlAction = (application) => {
  let cardAction = application.basics.cardAction;
  if(!cardAction) { return null; }
  let locale = application.locale;
  return (
    <PageSummaryLink
      name    = 'cdlWdywtdt'
      summary = {application.summary}
    >
      <New        showIf = {cardAction === 'new'}       locale={locale}/>
      <Renew      showIf = {cardAction === 'renew'}     locale={locale}/>
      <Replace    showIf = {cardAction === 'replace'}   locale={locale}/>
      <Correct    showIf = {cardAction === 'correct'}   locale={locale}/>
      <Update     showIf = {cardAction === 'update'}    locale={locale}/>
    </PageSummaryLink>
  )
};

export default CdlAction;

