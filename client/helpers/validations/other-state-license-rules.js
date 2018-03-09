'use strict';

import selectionValidator from './selection-validator';
import { hasValue }   from '../data/validations';
import translations   from '../../i18n';

let tenYearHistory = (props) => {
  if(props.hasNonCALicense !== 'Yes') { return []; }

  let locale = props.locale;
  let errors = [];
  if(!hasValue(props.tenYearHistory)) {
    errors = [translations[locale].errorMessages.selectionMissing]
  }
  return errors;
};

export default {
  hasNonCALicense: selectionValidator('selectionMissing', 'hasNonCALicense'),
  tenYearHistory: tenYearHistory
};
