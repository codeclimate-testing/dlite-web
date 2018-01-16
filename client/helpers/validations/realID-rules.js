'use strict';

import selectionValidator   from './selection-validator';
import { mustChooseCard }   from '../data/real-id';

let designation = (props) => {
  if (!mustChooseCard(props)) {
    return [];
  }
  return selectionValidator('realIdCardSelectionMissing', 'realID', 'realIdDesignation')(props);
};

export default {
  realID: selectionValidator('realIdSelectionMissing', 'realID', 'getRealID'),
  designation: designation
};
