'use strict';

import errorMessages from '../../presentations/error-messages';
import { hasValue }  from '../data/validations';
import translations  from '../../i18n';

const youthIDInstead = (props) => {
  let locale = props.locale;
  if (!hasValue(props)) {
    return [translations[locale].errorMessages.selectionMissing];
  }
  return [];
};

export default {
  youthIDInstead: youthIDInstead
};
