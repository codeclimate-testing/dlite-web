'use strict';

import React            from 'react';
import * as dataPresent from '../../helpers/data-present';
import PageSummaryLink  from '../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';

const SocialSecurity = (props) => {
  if(!dataPresent.socialSecurity(props.socialSecurity)) { return null; }

  //let socialSecurity =  props.socialSecurity.part1 + '-' +
  //props.socialSecurity.part2 + '-' +
  //                     props.socialSecurity.part3;

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
