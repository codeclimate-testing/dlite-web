'use strict';

import errorMessages  from '../../presentations/error-messages';
import { hasValue }   from '../data/validations';

const cardType = (props) => {
  if (hasValue(props) ||
      hasValue(props.renew) ||
      hasValue(props.change) ||
      hasValue(props.replace) ||
      hasValue(props.youthIDInstead)
  ) {
    return [];
  }
  return [errorMessages.cardTypeMissing];
};

export default {
  cardType: cardType
};
