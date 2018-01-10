'use strict';

import errorMessages from '../../presentations/error-messages';
import { hasValue }  from '../data/validations';

const youthIDInstead = (props) => {
  console.log("++++++++++++++++++++++++++++++++" + props);
  if (!hasValue(props)) {
    return [errorMessages.selectionMissing];
  }
  return [];
};

export default {
  youthIDInstead: youthIDInstead
};