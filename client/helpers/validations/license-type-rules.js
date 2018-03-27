'use strict';

import errorMessages  from '../../presentations/error-messages';
import { hasValue }   from '../data/validations';

const licenseType = (props) => {
  let value   = props.licenseType.type;
  let errors  = [];
  if (!hasValue(value)) {
    errors = ['errorMessages.licenceClassMissing']
  }
  return errors;
};

const needEndorsement = (props) => {
  let value   = props.licenseType.needEndorsement;
  let errors  = [];
  if (!hasValue(value)) {
    errors = ['errorMessages.selectionMissing']
  }
  return errors;
};

export default {
  licenseType: licenseType,
  needEndorsement: needEndorsement
};
