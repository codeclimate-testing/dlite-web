'use strict';

import errorMessages  from '../../presentations/error-messages';
import { hasValue }   from '../data/validations';
import translations   from '../../i18n';

const licenseType = (props) => {
  let locale  = props.locale;
  let value   = props.licenseType.type;
  let errors  = [];
  if (!hasValue(value)) {
    errors = [translations[locale].errorMessages.licenceClassMissing]
  }
  return errors;
};

const needEndorsement = (props) => {
  let locale  = props.locale;
  let value   = props.licenseType.needEndorsement;
  let errors  = [];
  if (!hasValue(value)) {
    errors = [translations[locale].errorMessages.selectionMissing]
  }
  return errors;
};

export default {
  licenseType: licenseType,
  needEndorsement: needEndorsement
};
