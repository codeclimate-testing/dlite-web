'use strict';

import translations   from '../../i18n';
import { hasValue }   from '../data/validations';

const cardAction = (props) => {
  if (!hasValue(props)) {
    return [translations.errorMessages.applicationActionMissing];
  }
  return [];
};

export default {
  cardAction: cardAction
};
