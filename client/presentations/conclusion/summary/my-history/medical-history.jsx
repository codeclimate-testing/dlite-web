'use strict';

import React            from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import { DLAppExists }  from '../../../../helpers/data/card-type';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import {
  getStringByMedical,
  hasMedical
}   from '../../../../helpers/data/my-history';

const Medical = (props) => {
  let medicalCondition = getStringByMedical(props);
  if(hasMedical(props)) {
    return (
      <SummaryItem
        title = 'summaryPage.myHistory.medicalConditions'
        text  = { medicalCondition }
      />
    )
  } else {
    return (
      <SummaryItem
        title = 'summaryPage.myHistory.medicalConditions'
        text  = 'shared.summary.none'
      />
    )
  }
}

const MedicalHistory = (props) => {
  if (!props.showIf) { return null; }

  return (
    <PageSummaryLink
      {...props}
    >
      <Medical {...props} />
    </PageSummaryLink>
  );
};

export default MedicalHistory;
