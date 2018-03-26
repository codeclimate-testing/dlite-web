'use strict';

import errorMessages  from '../../presentations/error-messages';
import { hasValue }   from '../data/validations';
import translations   from '../../i18n';

const disclaimersType = (props) => {
  let locale  = props.locale;
  let value   = props.disclaimers.type;
  let errors  = [];
  if (!hasValue(value)) {
    errors = [translations[locale].errorMessages.applicationActionMissing]
  }
  return errors;
};

export default {
  disclaimersType: disclaimersType
};