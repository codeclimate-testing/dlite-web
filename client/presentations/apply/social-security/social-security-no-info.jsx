'use strict';

import React from 'react';

const NoInfo = (props) => {
  if(props.socialSecurity.hasSocialSecurity !== 'No') { return null; }
  return (
    <div className='social-security-no-info'>
      <p>
        By answering No, you confirm that a Social Security Number has never been issued to you and you are not presently eligible for a Social Security Number.
      </p>

      <p>
        You understand that pursuant to California Vehicle Code §12801, you must provide your Social Security Number to the Department of Motor Vehicles when one is assigned to you. Read the disclaimer for more information.
      </p>
    </div>
  );
};

export default NoInfo;
