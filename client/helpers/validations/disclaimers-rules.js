'use strict';

import errorMessages  from '../../presentations/error-messages';
import { hasValue }   from '../data/validations';

const disclaimersType = (props) => {
  let value   = props.disclaimers.type;
  let errors  = [];
  if (!hasValue(value)) {
    errors = ['errorMessages.applicationActionMissing']
  }
  return errors;
};

export default {
  disclaimersType: disclaimersType
};