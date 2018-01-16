'use strict';

import selectionValidator from './selection-validator';

export default {
  cardType: selectionValidator('cardTypeMissing')
};
