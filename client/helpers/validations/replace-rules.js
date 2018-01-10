'use strict';

import errorMessages from '../../presentations/error-messages';
import { hasValue } from '../data/validations';

const reason = (props) => {
  let value = props.reason;
  let errors = [];

  if (!hasValue(props.reason)) {
    errors.push(errorMessages.selectionMissing);
  }
  return errors;
};

export default {
  reason: reason
};
