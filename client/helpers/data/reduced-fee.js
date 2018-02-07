'use strict';
import { hasValue }           from '../data/validations';
import { getID }              from './card-type';
import { gettingSeniorID}     from './senior';

export const eligibleForReducedFee = (props) => {
  return !gettingSeniorID(props) && getID(props);
};

export const choosingReducedFee = (props) => {
  return props.reducedFee.ID === 'Yes';
};

export const canContinue = (props) => {
  let consider = choosingReducedFee(props) ? props.reducedFee.form : props.reducedFee.ID.toString();
  return hasValue(consider);
};

export const reducedOrNoFee = (props) => {
  return hasValue(props.reducedFee.ID) || gettingSeniorID(props);
};