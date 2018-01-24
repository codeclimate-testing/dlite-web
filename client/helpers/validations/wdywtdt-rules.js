'use strict';

import errorMessages  from '../../presentations/error-messages';
import { hasValue }   from '../data/validations';

const cardAction = (props) => {
  if (!hasValue(props)) {
    return [errorMessages.applicationActionMissing];
  }
  return [];
};

export default {
  cardAction: cardAction
};
