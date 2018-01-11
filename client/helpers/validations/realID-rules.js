'use strict';

import errorMessages        from '../../presentations/error-messages';
import { hasValue }         from '../data/validations';
import { mustChooseCard }   from '../data/real-id';


const selection = (name, error) => {
  return props => {
    if (!hasValue(props.realID[name])) {
      return [errorMessages[error]];
    }
    return [];
  };
};

let designation = (props) => {
  if (!mustChooseCard(props)) {
    return [];
  }
  return selection('realIdDesignation', 'realIdCardSelectionMissing')(props);
};

export default {
  realID: selection('getRealID', 'realIdSelectionMissing'),
  designation: designation
};
