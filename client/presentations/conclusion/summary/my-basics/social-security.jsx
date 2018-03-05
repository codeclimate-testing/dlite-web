'use strict';

import React            from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import PageSummaryLink  from '../Page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import {
  hasSocialSecurityNo
} from '../../../../helpers/data/ssn';

const SocialSecurity = (props) => {
  if(hasSocialSecurityNo(props)) { return null; }

  let socialSecurity =  'xxx' + '-' + 'xx' + '-' + props.socialSecurity.part3;

  return (
    <PageSummaryLink
      summary = {props.summary}
      name    = {props.editKey}
    >
    <SummaryItem
        title='Social Security Number'
        text={socialSecurity}
      />
    </PageSummaryLink>
  );
};

export default SocialSecurity;
