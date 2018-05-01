'use strict';
import React            from 'react';
import Accordion        from '../../../containers/accordion.jsx';
import * as dataPresent from '../../../helpers/data-present';
import PageSummaryLink  from '../../../containers/page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';
import {
  donateOrganYes,
  donateOrganNo,
  donateMoney
 }  from '../../../helpers/data/organ-donation';

const DonateOrgan = (props) => {
  if(donateOrganYes(props)) {
    return (
      <SummaryItem
        title = 'summaryPage.organDonation.beAnOrganDonor'
        text  = 'shared.commonAnswers.yes'
      />
    )} else if (donateOrganNo(props)) {
      return(
        <SummaryItem
          title = 'summaryPage.organDonation.beAnOrganDonor'
          text  = 'shared.commonAnswers.no'
        />
      )}
}

const DonateMoney = (props) => {
  if(donateMoney(props)) {
    return (
      <SummaryItem
        title = 'summaryPage.organDonation.donate'
        text  = 'shared.commonAnswers.yes'
      />
    )} else if (!donateMoney(props)) {
      return (
        <SummaryItem
          title = 'summaryPage.organDonation.donate'
          text  = 'shared.commonAnswers.no'
        />
      )}
}

const Organ = (props) => {
  if (!dataPresent.organDonation(props.organDonation)) { return null; }

  return (
    <PageSummaryLink
      {...props}
    >
      <DonateOrgan {...props} />
      <DonateMoney {...props} />
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
