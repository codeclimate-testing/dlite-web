'use strict';

import React            from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import { DLAppExists }  from '../../../../helpers/data/card-type';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import {
  getStringByMedical
}   from '../../../../helpers/data/my-history';

const MedicalHistory = (props) => {
  if (!props.showIf) { return null; }
  let medicalCondition = getStringByMedical(props);

  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title = 'summaryPage.myHistory.medicalConditions'
        text  = { medicalCondition }
      />
    </PageSummaryLink>
  );
};

export default MedicalHistory;
