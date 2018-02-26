'use strict';

import selectionValidator     from './selection-validator';

export default {
  reducedFee: selectionValidator('selectionMissing', 'reducedFee', 'ID')
};
