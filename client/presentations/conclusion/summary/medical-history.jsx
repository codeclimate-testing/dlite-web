'use strict';

import React from 'react';
import * as dataPresent from '../../../helpers/data-present';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';

const MedicalHistory = (props) => {
  let medicalCondition = 'None'
  if(props.medicalHistory.hasMedicalCondition === 'Yes') {
    medicalCondition = props.medicalHistory.medicalInfo
  } else {
    medicalCondition
  };

  if(props.cardType.new.indexOf('DL') > -1 || props.cardType.renew === 'DL' || props.cardType.change === 'DL' || props.cardType.replace === 'DL') {
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
  } else {
    return null;
  }
};

export default MedicalHistory;
