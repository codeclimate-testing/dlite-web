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

const CdlAction = (props) => {
  if(!isCardActionSelected(props)) { return null; }
  let locale = props.locale;

  return (
    <PageSummaryLink
      name    = 'cdlWdywtdt'
      summary = {props.summary}
    >
      <New        showIf = {isGettingNew(props)}    locale={locale}/>
      <Renew      showIf = {isRenewingCard(props)}  locale={locale}/>
      <Replace    showIf = {isReplacingCard(props)} locale={locale}/>
    </PageSummaryLink>
  )
};

export default CdlAction;