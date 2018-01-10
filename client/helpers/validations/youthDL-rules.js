'use strict';

import errorMessages from '../../presentations/error-messages';
import { hasValue }  from '../data/validations';

const youthIDInstead = (props) => {
  if (!hasValue(props)) {
    return [errorMessages.selectionMissing];
  }
  return [];
};

export default {
  youthIDInstead: youthIDInstead
};