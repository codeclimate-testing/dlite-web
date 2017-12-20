'use strict';

export const eligibleForReducedFee = (props) => {
  return props.seniorID !== 'Yes' && props.cardType.ID;
};
