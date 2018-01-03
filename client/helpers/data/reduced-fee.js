'use strict';
import { hasValue }           from '../data/validations';
import { getID } from './card-type';

export const eligibleForReducedFee = (props) => {
  return props.seniorID !== 'Yes' && getID(props);
};

export const choosingReducedFee = (props) => {
  return props.reducedFee.ID === 'Yes';
};

export const canContinue = (props) => {
  let consider = choosingReducedFee(props) ? props.reducedFee.form : props.reducedFee.ID.toString();
  return hasValue(consider);
};
