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

  return (
    <PageSummaryLink
      name    = 'cdlWdywtdt'
      summary = {application.summary}
    >
      <New        showIf = {cardAction === 'new'}/>
      <Renew      showIf = {cardAction === 'renew'}/>
      <Replace    showIf = {cardAction === 'replace'}/>
      <Correct    showIf = {cardAction === 'correct'}/>
      <Update     showIf = {cardAction === 'update'}/>
    </PageSummaryLink>
  )
};

export default CdlAction;

