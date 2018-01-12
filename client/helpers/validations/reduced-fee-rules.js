'use strict';

import errorMessages        from '../../presentations/error-messages';
import { hasValue }         from '../data/validations';
import { choosingReducedFee }      from '../data/reduced-fee';

const selection = (name, error) => {
  return props => {
    if (!hasValue(props.reducedFee[name])) {
      return [errorMessages[error]];
    }
    return [];
  };
};

let form = (props) => {
  if (!choosingReducedFee(props)) {
    return [];
  }
  return selection('form', 'selectionMissing')(props);
};

export default {
  reducedFee: selection('ID', 'selectionMissing'),
  form: form
};
