'use strict';

import errorMessages from '../../presentations/error-messages';
import { hasValue } from '../data/validations';

const licenseType = (props) => {
  let value = props.licenseType.type;
  let errors = [];
  if (!hasValue(value)) {
    errors = [errorMessages.licenseClassMissing]
  }
  return errors;
};

const needEndorsement = (props) => {
  let value = props.licenseType.needEndorsement;
  let errors = [];
  if (!hasValue(value)) {
    errors = [errorMessages.needEndorsement]
  }
  return errors;
};

const endorsement = (props) => {
  let value = props.licenseType.endorsement;
  let errors = [];
  if (props.licenseType.needEndorsement === 'Yes' && !hasValue(value)){
    errors = [errorMessages.endorsement]
  }
  return errors;
};

export default {
  licenseType: licenseType,
  needEndorsement: needEndorsement,
  endorsement: endorsement
};