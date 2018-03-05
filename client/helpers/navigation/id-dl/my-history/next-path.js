'use strict';
import {
  getDL,
  getNewDL
} from '../../../data/card-type';

export const medicalHistory = (props) => {
  let key = 'nameHistory';
  if (getNewDL(props)) {
    key = 'cardHistory';
  }
  return key;
};

export const nameHistory = (props) => {
  let key = 'veterans';
  if (getDL(props)) {
    key = 'licenseIssues';
  }
  return key;
};