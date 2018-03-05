'use strict';

import React        from 'react';

const LegalAgreement = (props) => {
  return (
    <div className='legal-agreement'>
      <hr/>
        <h3>By continuing with the application you agree to the below:</h3>
        <p><b>I certify</b> (or declare) under penalty of perjury under the laws of the State of California that the motor vehicle that I am using to take the driving skills test is representative of the type of motor vehicle I expect to operate. I further certify that I am not subject to a disqualification, suspension, revocation, or cancellation as written in Title 49 of the Federal Regulations, Part 383.51, and I do not have a driver license from more than one state or jurisdiction.</p>
      <hr/>
    </div>
  )
};

export default LegalAgreement;