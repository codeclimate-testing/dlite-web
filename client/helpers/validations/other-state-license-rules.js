'use strict';

import selectionValidator from './selection-validator';

let tenYearHistory = (props) => {
  if(props.hasNonCALicense !== 'Yes') {
    return [];
  }
  return selectionValidator("selectionMissing', 'tenYearHistory")
};

export default {
  hasNonCALicense: selectionValidator('selectionMissing', 'hasNonCALicense'),
  tenYearHistory: tenYearHistory
};
