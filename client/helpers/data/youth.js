'use strict';

import { ageChecks } from '../calculate-age';
import { getDL } from './card-type';

export const validToContinue = (props) => {
  return props.cardType.youthIDInstead !== 'No' ||
    ageChecks.GreaterThanEqual15(props.dateOfBirth);
};

export const tooYoungForDL = (props) => {
  return ageChecks.Under15Half(props.dateOfBirth) &&
    getDL(props);
};
