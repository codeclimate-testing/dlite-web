'use strict';

import translations   from '../../i18n';
import { hasValue }   from '../data/validations';

const cardAction = (props) => {
  let locale = props.locale;
  if (!hasValue(props)) {
    return [translations[locale].errorMessages.applicationActionMissing];
  }
  return [];
};

export default {
  cardAction: cardAction
};
