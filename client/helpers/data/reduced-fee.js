'use strict';

export const eligibleForReducedFee = (props) => {
  return props.seniorID !== 'Yes' && props.cardType.ID;
};

export const choosingReducedFee = (props) => {
  return props.reducedFee.ID === 'Yes';
}