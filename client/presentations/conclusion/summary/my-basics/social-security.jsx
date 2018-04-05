'use strict';

import React            from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import {
  getSocialSecurityString
} from '../../../../helpers/data/ssn';

const SocialSecurity = (props) => {
  if (!(dataPresent.socialSecurity(props.socialSecurity))) { return null };
  let ssn = getSocialSecurityString(props);
  return (
    <PageSummaryLink
      {...props}
    >
    <SummaryItem
        title = 'applicationPreparationPage.noRealIdSection.socialSecurity.header'
        text  = { ssn }
      />
    </PageSummaryLink>
  );
};

export default SocialSecurity;
