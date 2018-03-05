'use strict';
import {
  getDL,
  getNewID
} from '../../../data/card-type';

export const socialSecurity = (props) => {
  let key = 'nameHistory';

  if (getDL(props)) {
    key = 'medicalHistory';
  } else if (getNewID(props)) {
    key = 'cardHistory';
  }
  return key;
};