'use strict';

import React                    from 'react';
import translations             from '../../../../i18n';
import { ballotByMailSelected } from '../../../../helpers/data/voting';

import PageSummaryLink  from '../Page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';

const BallotByMail = (props) => {
  if (!ballotByMailSelected(props)) { return null; }
  let locale = props.locale;
  return (
  <PageSummaryLink
    to='/voting-registration/vote-by-mail'
    name='ballotByMail'
  >
    <SummaryItem
      title={translations[locale].summaryPage.voterRegistration.voteByMail}
      text={props.ballotByMail}
    />
  </PageSummaryLink>
);
};

export default BallotByMail;
