'use strict';

export const hasMultipleCards = (props) => {
  return props.cardType.DL && props.cardType.ID
};
