'use strict';

import { canBeSenior } from '../calculate-age';
import { getID } from './card-type';

export const eligibleForSeniorID = (props) => {
  return canBeSenior(props.dateOfBirth) &&
    getID(props);
};
