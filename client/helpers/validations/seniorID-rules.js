'use strict';

import errorMessages from '../../presentations/error-messages';
import { hasValue } from '../data/validations';

const seniorID = (props) => {
  if (!hasValue(props)) {
    return [errorMessages.selectionMissing];
  }
  return [];
};

export default {
  seniorID: seniorID
};
