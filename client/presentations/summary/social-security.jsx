'use strict';

import React from "react";
import * as dataPresent from '../../helpers/data-present';

const SocialSecurity = (props) => {

  if(!dataPresent.socialSecurity(props.socialSecurity)) { return null; }

  let socialSecurity =  props.socialSecurity.part1 + '-' +
                        props.socialSecurity.part2 + '-' +
                        props.socialSecurity.part3;

  return (
    <div className='summary-section'>
      <p>Has Social Security: {props.socialSecurity.hasSocialSecurity}</p>
      <p>Social Security: {socialSecurity}</p>
    </div>
  );
};

export default SocialSecurity;
