'use strict';
import React            from 'react';
import Accordion        from '../../../containers/accordion.jsx';
import * as dataPresent from '../../../helpers/data-present';
import PageSummaryLink  from '../../../containers/page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';

const Organ = (props) => {
  if (!dataPresent.organDonation(props.organDonation)) { return null; }

  return (
    <PageSummaryLink
      {...props}
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

const OrganDonation = (props) => {
  return (
    <Accordion
      id          = 'organ-donation-summary'
      title       = 'intro.getStartedPage.listItems.2'
      key         = 'organ-donation-summary'
    >
      <Organ
        organDonation       = { props.application.organDonation}
        editKey             = 'organDonation'
      />
    </Accordion>
  );
};

export default OrganDonation;
