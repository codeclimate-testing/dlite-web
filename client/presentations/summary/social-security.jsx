'use strict';

import React from "react";
import * as dataPresent from '../../helpers/data-present';

const SocialSecurity = (props) => {

  let content = [];

  if(props.socialSecurity.hasSocialSecurity){
    content.push(
      <p key = 'summary-has-social-security'>
        Has Social Security: {props.socialSecurity.hasSocialSecurity}
      </p>
    );
  }

  if (dataPresent.socialSecurity(props.socialSecurity)) {
    let socialSecurity =  props.socialSecurity.part1 + '-' +
                          props.socialSecurity.part2 + '-' +
                          props.socialSecurity.part3;

    content.push(<p key = 'summary-social-security'> Social Security: {socialSecurity}</p>);
  }

  return (
    <div className='summary-section'>
      {content}
    </div>
  );
};

export default SocialSecurity;
