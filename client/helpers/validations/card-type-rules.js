'use strict';

import errorMessages  from '../../presentations/error-messages';
import { hasValue }   from '../data/validations';

const cardType = (props) => {

  if (!hasValue(props)) {
    return [errorMessages.cardTypeMissing];
  }
  return [];
};

export default {
  cardType: cardType
};
