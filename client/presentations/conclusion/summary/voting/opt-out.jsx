'use strict';

import React from 'react';
import translations            from '../../../../i18n';

import { hasValue }            from '../../../../helpers/data/validations';
import PageSummaryLink         from '../page-summary-link.jsx';
import SummaryItem             from '../summary-item.jsx';

const OptOut = (props) => {
  if (!hasValue(props.optOut)) { return null; }

  let optOut = '';

  if (props.optOut === 'new') {
    optOut = <p>{translations.summaryPage.voterRegistration.choiceYes}</p>
  } else if (props.optOut === 'existing') {
    optOut = <p>{translations.summaryPage.voterRegistration.choiceUpdate}</p>
  } else {
    optOut = <p>{translations.summaryPage.voterRegistration.choiceNo}</p>
  };

  return (
    <PageSummaryLink
      to='/voting-registration/opt-out'
      name='votingOptOut'
    >
      <SummaryItem
        title={translations.summaryPage.voterRegistration.registrationChoice}
        text={optOut}
      />
    </PageSummaryLink>
  )
};

export default OptOut;
