'use strict';
import React            from 'react';
import Accordion        from '../../../containers/accordion.jsx';
import * as dataPresent from '../../../helpers/data-present';
import PageSummaryLink  from './Page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';

const Organ = (props) => {
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

const OrganDonation = (application) => {
  return (
    <Accordion id='organ-donation-summary' title='Organ donation' key='organ-donation-summary'>
      <Organ
        organDonation       = {application.organDonation}
        summary             = 'summary'
      />
    </Accordion>
  );
};

export default OrganDonation;