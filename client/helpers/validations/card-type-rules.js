'use strict';
import {
  getDL,
  getID
} from '../data/card-type';

const cardType = (props) => {

  let errors = [];
  if (!getDL(props) && !getID(props)) {
    errors.push('errorMessages.cardTypeMissing');
  }
  return errors;
};

export default {
  cardType: cardType
};
