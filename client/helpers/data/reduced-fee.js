'use strict';

import { getID } from './card-type';

export const eligibleForReducedFee = (props) => {
  return props.seniorID !== 'Yes' && getID(props);
};

export const choosingReducedFee = (props) => {
  return props.reducedFee.ID === 'Yes';
}