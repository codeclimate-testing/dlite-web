'use strict';
import translations       from '../../i18n';
import {
  getDL,
  getID
} from '../data/card-type';

const cardType = (props) => {
  let errors = [];
  if (!getDL(props) && !getID(props)) {
    errors.push(translations.errorMessages['cardTypeMissing']);
  }
  return errors;
};

export default {
  cardType: cardType
};
