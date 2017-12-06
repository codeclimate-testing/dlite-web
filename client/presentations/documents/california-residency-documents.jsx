'use strict';

import React from 'react';

const CaliforniaResidencyDocuments = (props) => {
  const caResidencyList = 'https://www.dmv.ca.gov/portal/dmv/detail/dl/dl_info#Residency%20Documents';

  return (
    <div key='california-residency-documents'>
      <h4 className="california-residency-documents">California residency</h4>
      <p>You will also need to bring in a document that proves that you live in California.
      Please review our <a target="_blank" href={ caResidencyList }>list of acceptable California residency documents</a>.
      </p>
    </div>
  );
};

export default CaliforniaResidencyDocuments;
