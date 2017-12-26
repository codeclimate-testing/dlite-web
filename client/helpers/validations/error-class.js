'use strict';

import { hasValue } from '../data/validations';

const errorClass = (props) => {
  if (hasValue(props.errorMessage)) { return 'error'; }
  return '';
};

export default errorClass;
