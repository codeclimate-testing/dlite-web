'use strict';
import React                from 'react';
import * as dataPresent     from '../../../helpers/data-present';
import PageSummaryLink      from '../../../containers/page-summary-link.jsx';
import SummaryItem          from '../../conclusion/summary/summary-item.jsx';
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

const CDLOrganDonation = (props) => {
  if (!dataPresent.organDonation(props.organDonation)) { return null; }
  return (
    <PageSummaryLink
      editKey    = 'cdlOrganDonation'
    >
      <DonateOrgan {...props} />
      <DonateMoney {...props} />
    </PageSummaryLink>
  );
};

export default CDLOrganDonation;
