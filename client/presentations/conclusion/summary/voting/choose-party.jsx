'use strict';

import React from 'react';

import PageSummaryLink              from '../Page-summary-link.jsx';
import SummaryItem                  from '../summary-item.jsx';
import {
  politicalPartySelected,
  getStringByParty
}   from '../../../../helpers/data/voting';
import translations                 from '../../../../i18n';

const PoliticalPartyChoose = (props) => {
  if (!politicalPartySelected(props) ) { return null; }
  let locale = props.locale;
  let party = getStringByParty(props);

  return (
    <PageSummaryLink
      to='/voting-registration/choose-party'
      name='choosePoliticalParty'
    >
      <SummaryItem
        title={translations[locale].summaryPage.voterRegistration.politicalParty}
        text={party}
      />
    </PageSummaryLink>
  )
};

export default PoliticalPartyChoose;
