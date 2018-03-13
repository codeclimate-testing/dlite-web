'use strict';
import { altFlow }  from '../../../data/pathnames';
import {
  getDL,
  getNewID
} from '../../../data/card-type';

export const socialSecurity = (props) => {
  let key = 'summary';
  if (!altFlow(props)) {
    key = 'nameHistory';
    if (getDL(props)) {
      key = 'medicalHistory';
    } else if (getNewID(props)) {
      key = 'cardHistory';
    }
  }

  return key;
};