'use strict';

import { hasValue }       from '../data/validations';

function selectionValidator(error, name, subname) {
  return (props) => {
    let value = subname ? props[name][subname] : name ? props[name] : props;
    let errors = [];

    if (!hasValue(value)) {
      let errorKey = 'errorMessages.' + error;
      errors.push(errorKey);
    }
    return errors;
  };
};

export default selectionValidator;
