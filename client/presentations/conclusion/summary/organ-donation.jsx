'use strict';
import React            from 'react';
import Accordion        from '../../../containers/accordion.jsx';
import * as dataPresent from '../../../helpers/data-present';
import PageSummaryLink  from '../../../containers/page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';
import translations     from '../../../i18n';

const Organ = (props) => {
  if (!dataPresent.organDonation(props.organDonation)) { return null; }
  let locale = props.locale;

  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title={ translations[locale].summaryPage.organDonation.beAnOrganDonor}
        text={props.organDonation.donateOrgan}
      />
      <SummaryItem
        title={ translations[locale].summaryPage.organDonation.donate}
        text={props.organDonation.donateMoney}
      />
    </PageSummaryLink>
  );
};

const OrganDonation = (props) => {
  return (
    <Accordion id='organ-donation-summary' title='Organ donation' key='organ-donation-summary'>
      <Organ
        organDonation       = { props.application.organDonation}
        editKey             = 'organDonation'
        locale              = { props.ui.locale }
      />
    </Accordion>
  );
};

export default OrganDonation;