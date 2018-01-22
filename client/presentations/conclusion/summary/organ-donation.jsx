'use strict';

import React from 'react';
import * as dataPresent from '../../../helpers/data-present';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';

const OrganDonation = (props) => {
  if (!dataPresent.organDonation(props.organDonation)) { return null; }

  return (
    <PageSummaryLink
      to='/organ-donation'
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
