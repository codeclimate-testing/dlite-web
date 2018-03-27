'use strict';

import React            from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import {
  hasSocialSecurityNo
} from '../../../../helpers/data/ssn';

const SocialSecurity = (props) => {
  if(hasSocialSecurityNo(props)) { return null; }
  let socialSecurity =  'xxx' + '-' + 'xx' + '-' + props.socialSecurity.part3;
  return (
    <PageSummaryLink
      {...props}
    >
    <SummaryItem
        title = 'applicationPreparationPage.noRealIdSection.socialSecurity.header'
        text  = { socialSecurity }
      />
    </PageSummaryLink>
  );
};

export default SocialSecurity;
