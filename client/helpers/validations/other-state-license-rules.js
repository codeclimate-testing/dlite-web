'use strict';

import selectionValidator from './selection-validator';
import { hasValue }   from '../data/validations';

let tenYearHistory = (props) => {
  if(props.hasNonCALicense !== 'Yes') { return []; }

  let errors = [];
  if(!hasValue(props.tenYearHistory)) {
    errors = ['errorMessages.selectionMissing']
  }
  return errors;
};

export default {
  hasNonCALicense: selectionValidator('selectionMissing', 'hasNonCALicense'),
  tenYearHistory: tenYearHistory
};
