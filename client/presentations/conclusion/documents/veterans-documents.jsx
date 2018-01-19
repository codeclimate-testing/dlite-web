'use strict';

import React from 'react';

const VeteransDocuments = (props) => {
  const veteranVerificationLink = 'https://www.dmv.ca.gov/portal/dmv/detail/coi/veterans/veterans_driver_license';

  if(props.veteransService.isVeteran !== 'Yes' && props.veteransService.veteransIdentifier !== 'Yes') {return null;}

  return (
    <div key='proof-of-veterans-service'>
      <h4 className="proof-of-veterans-service">Proof of veterans service</h4>
      <p>To get “Veteran” on your card, you need to to bring a <a target="_blank" href={ veteranVerificationLink }> Veteran Status Verification Form </a>
      that your County Veteran Service Office can provide to you. We thank you for your service! </p>
    </div>
  );
};

export default VeteransDocuments;
