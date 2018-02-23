'use strict';

import React            from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import { DLAppExists }  from '../../../../helpers/data/card-type';
import PageSummaryLink  from '../Page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import {
  getStringByMedical
}   from '../../../../helpers/data/my-history';

const MedicalHistory = (props) => {
  if (!DLAppExists(props)) { return null; }
  let medicalCondition = getStringByMedical(props);

  return (
    <PageSummaryLink
      name= 'addMedicalHistory'
      summary = {props.summary}
    >
      <SummaryItem
        title='Medical conditions:'
        text={medicalCondition}
      />
    </PageSummaryLink>
    );

};

export default MedicalHistory;
