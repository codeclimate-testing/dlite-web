'use strict';
import React                from 'react';
import * as dataPresent     from '../../../helpers/data-present';
import PageSummaryLink      from '../../../containers/page-summary-link.jsx';
import SummaryItem          from '../../conclusion/summary/summary-item.jsx';

const CDLOrganDonation = (props) => {

  if (!dataPresent.organDonation(props.organDonation)) { return null; }

  return (
    <PageSummaryLink
      editKey    = 'cdlOrganDonation'
    >
      <SummaryItem
        title = 'summaryPage.organDonation.beAnOrganDonor'
        text  = { props.organDonation.donateOrgan }
      />
      <SummaryItem
        title = 'summaryPage.organDonation.donate'
        text  = { props.organDonation.donateMoney }
      />
    </PageSummaryLink>
  );
};

export default CDLOrganDonation;