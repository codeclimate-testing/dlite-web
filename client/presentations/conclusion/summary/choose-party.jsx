'use strict';

import React from 'react';

import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';
import { hasValue }     from '../../../helpers/data/validations';

const PoliticalPartyChoose = (props) => {
  if (!hasValue(props.politicalPartyChoose.isSelected) ) { return null; }

  let party = '';
  
  if (props.politicalPartyChoose.isSelected === 'Skip') {
    party = 'No answer';
  } else if(props.politicalPartyChoose.politicalPartyChoose === 'Other' && hasValue(props.politicalPartyChoose.otherParty)) {
    party = props.politicalPartyChoose.otherParty;
  } else {
    party = props.politicalPartyChoose.politicalPartyChoose;
  };

  return (
    <PageSummaryLink
      to='/voting-registration/choose-party'
      name='choosePoliticalParty'
    >
      <SummaryItem
        title = 'Political party'
        text  = {party}
      />
    </PageSummaryLink>
  )
};

export default PoliticalPartyChoose;
