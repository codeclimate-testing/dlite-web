'use strict';

import { hasValue }   from '../data/validations';

const cardAction = (props) => {

  if (!hasValue(props)) {
    return ['errorMessages.applicationActionMissing'];
  }
  return [];
};

export default {
  cardAction: cardAction
};
