'use strict';

import React            from 'react';
import { hasValue }     from '../../../helpers/data/validations';
import translations     from '../../../i18n';
import PageSummaryLink  from '../../conclusion/summary/Page-summary-link.jsx';
import SummaryItem      from '../../conclusion/summary/summary-item.jsx';
import {
  getStringByMedical
}   from '../../../helpers/data/my-history';

const MedicalHistory = (props) => {
  if (!hasValue(props.medicalHistory.hasMedicalCondition)) { return null; }
  let medicalCondition = getStringByMedical(props);
  let locale = props.locale;

  return (
    <PageSummaryLink
      name    = 'cdlMedical'
      summary = 'cdlSummary'
    >
      <SummaryItem
        title={translations[locale].summaryPage.myHistory.medicalConditions + ':'}
        text={medicalCondition}
      />
    </PageSummaryLink>
    );

};

export default MedicalHistory;
