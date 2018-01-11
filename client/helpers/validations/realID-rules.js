'use strict';

import errorMessages        from '../../presentations/error-messages';
import { hasValue }         from '../data/validations';
import { mustChooseCard }   from '../data/real-id';


const selection = (name) => {
  return props => {
    if (!hasValue(props.realID[name])) {
      return [errorMessages.realIdSelectionMissing];
    }
    return [];
  };
};

let designation = (props) => {
  if (!mustChooseCard(props)) {
    return [];
  }
  return selection('realIdDesignation')(props);
};

export default {
  realID: selection('getRealID'),
  designation: designation
};
