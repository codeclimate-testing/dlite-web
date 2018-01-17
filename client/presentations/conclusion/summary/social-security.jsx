'use strict';

import React            from 'react';
import * as dataPresent from '../../../helpers/data-present';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';

const SocialSecurity = (props) => {
  if(!dataPresent.socialSecurity(props.socialSecurity) || props.socialSecurity.hasSocialSecurity === 'No') { return null; }

  let socialSecurity =  'xxx' + '-' + 'xx' + '-' + props.socialSecurity.part3;

  return (
    <PageSummaryLink
      to='/my-basics/social-security'
      name='socialSecurity'
    >
      <SummaryItem
        title='Social Security Number'
        text={socialSecurity}
      />
    </PageSummaryLink>
  );
};

export default SocialSecurity;
