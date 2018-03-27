'use strict';

import React            from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';

const LegalName = (props) => {
  if (!dataPresent.legalName(props.legalName)) { return null; }

  let printedName = `${props.legalName.firstName} ${props.legalName.middleName} ${props.legalName.lastName} ${props.legalName.suffix}`;

  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title = 'shared.labels.name'
        text  = { printedName }
      />
    </PageSummaryLink>
  );
};

export default LegalName;
