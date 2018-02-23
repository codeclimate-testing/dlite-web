'use strict';

import React            from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import PageSummaryLink  from '../Page-summary-link.jsx';
import SummaryItem      from '../Summary-item.jsx';

const OrganDonation = (props) => {
  if (!dataPresent.organDonation(props.organDonation)) { return null; }

  return (
    <PageSummaryLink
      summary = {props.summary}
      name='organDonation'
    >
      <SummaryItem
        title='Be an organ donor'
        text={props.organDonation.donateOrgan}
      />
      <SummaryItem
        title='Donate $2'
        text={props.organDonation.donateMoney}
      />
    </PageSummaryLink>
  );
};

export default OrganDonation;
