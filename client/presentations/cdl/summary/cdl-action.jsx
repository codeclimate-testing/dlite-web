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
import {
  isRenewingCard,
  isGettingNew,
  isCardActionSelected,
  isReplacingCard
} from '../../../helpers/data/card-actions';

const CdlAction = (cdl) => {
  let cardAction = cdl.basics.cardAction;
  if(!cardAction) { return null; }
  let locale = cdl.locale;
  return (
    <PageSummaryLink
      name    = 'cdlWdywtdt'
      summary = {cdl.summary}
    >
      <New        showIf = {isGettingNew(props)} locale={locale}/>
      <Renew      showIf = {isRenewingCard(props)} locale={locale}/>
      <Replace    showIf = {isReplacingCard(props)} locale={locale}/>
    </PageSummaryLink>
  )
};

export default CdlAction;

