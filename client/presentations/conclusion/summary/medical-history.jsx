'use strict';

import React from 'react';
import * as dataPresent from '../../../helpers/data-present';
import { getDL }        from '../../../helpers/data/card-type';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';
import { getStringByStatus} from '../../../helpers/data/summary';
import {
  getStringByMedical
}   from '../../../helpers/data/my-history';

const MedicalHistory = (props) => {
  if (!getDL(props)) { return null; }
  let medicalCondition = getStringByMedical(props);

  return (
    <PageSummaryLink
      to='/my-history/medical'
      name='medicalHistory'
    >
      <SummaryItem
        title='Medical conditions:'
        text={medicalCondition}
      />
    </PageSummaryLink>
    );

};

export default MedicalHistory;
