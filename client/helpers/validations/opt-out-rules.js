'use strict';

import selectionValidator  from './selection-validator';

export default {
  optOut: selectionValidator('wantToPreregisterSelectionMissing')
};