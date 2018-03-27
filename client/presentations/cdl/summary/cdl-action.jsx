'use strict';

import React                from 'react';
import PageSummaryLink      from '../../../containers/page-summary-link.jsx';
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
  isReplacingCard,
  isCorrecting,
  isUpdating
} from '../../../helpers/data/card-actions';

const CdlAction = (props) => {
  if(!isCardActionSelected(props)) { return null; }

  return (
    <PageSummaryLink
      {...props}
    >
      <New        showIf = {isGettingNew(props)}    />
      <Renew      showIf = {isRenewingCard(props)}  />
      <Replace    showIf = {isReplacingCard(props)} />
      <Correct    showIf = {isCorrecting(props)}    />
      <Update     showIf = {isUpdating(props)}      />
    </PageSummaryLink>
  )
};

export default CdlAction;