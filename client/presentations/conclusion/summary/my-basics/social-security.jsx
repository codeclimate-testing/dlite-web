'use strict';

import React            from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import translations     from '../../../../i18n';
import {
  hasSocialSecurityNo
} from '../../../../helpers/data/ssn';

const SocialSecurity = (props) => {
  if(hasSocialSecurityNo(props)) { return null; }

  let socialSecurity =  'xxx' + '-' + 'xx' + '-' + props.socialSecurity.part3;
  let locale = props.locale;

  return (
    <PageSummaryLink
      {...props}
    >
    <SummaryItem
        title={ translations[locale].applicationPreparationPage.noRealIdSection.socialSecurity.header}
        text={socialSecurity}
      />
    </PageSummaryLink>
  );
};

export default SocialSecurity;
