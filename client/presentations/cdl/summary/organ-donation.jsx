'use strict';
import React                from 'react';
import translations         from '../../../i18n';
import Accordion            from '../../../containers/accordion.jsx';
import * as dataPresent     from '../../../helpers/data-present';
import PageSummaryLink      from '../../conclusion/summary/Page-summary-link.jsx';
import SummaryItem          from '../../conclusion/summary/summary-item.jsx';

const CDLOrganDonation = (props) => {

  if (!dataPresent.organDonation(props.organDonation)) { return null; }
  let locale = props.locale;
  
  return (
    <PageSummaryLink
      name    = 'cdlOrganDonation'
      summary = 'cdlSummary'
    >
      <SummaryItem
        title = 'Be an organ donor'
        text = {props.organDonation.donateOrgan}
      />
      <SummaryItem
        title = 'Donate $2'
        text = {props.organDonation.donateMoney}
      />
    </PageSummaryLink>
  );
};

export default CDLOrganDonation;