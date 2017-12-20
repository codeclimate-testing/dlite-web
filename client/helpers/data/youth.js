'use strict';

import { ageChecks } from '../calculate-age';

export const validToContinue = (props) => {
  return props.cardType.youthIDInstead !== 'No' ||
    ageChecks.GreaterThanEqual15(props.dateOfBirth);
};
