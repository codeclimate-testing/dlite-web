'use strict';

import selectionValidator from './selection-validator';

export default {
  hasNonCALicense: selectionValidator('selectionMissing', 'hasNonCALicense'),
  tenYearHistory: selectionValidator('selectionMissing', 'tenYearHistory')
};
