'use strict';

import React            from "react";
import { hasValue }     from '../../../../helpers/data/validations';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';

const SeniorID = (props) => {
  if (!hasValue(props.seniorID)) { return null; }

  return (
    <PageSummaryLink
      {...props}
      name    = { props.editKey }
    >
      <SummaryItem
        title = 'summaryPage.myID.seniorIDHeading'
        text  = { props.seniorID }
      />
    </PageSummaryLink>
  )
};

export default SeniorID;
