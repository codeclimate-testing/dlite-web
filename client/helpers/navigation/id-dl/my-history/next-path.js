'use strict';

import {
  altFlow
} from '../../../data/pathnames';

import {
  addingDL,
  addingExistingCard,
  addCardHistory
} from '../../../data/add-flow';
import {
   initialDL,
   initialGetNewDL
 }  from '../../../data/edit-flow';

export const nameHistory = (props) => {
  let key = 'summary';
  if (initialDL(props)) {
    key = 'licenseIssues';
  }
  else if (!altFlow(props)) {
    key = 'veterans';
  }
  return key;
};

export const medicalHistory = (props) => {
  let key = 'summary';

  if(initialGetNewDL(props)) {
    key = 'cardHistory';
  }
  else if (!altFlow(props)) {
    key = 'nameHistory';
  }
  else if (addingExistingCard(props)) {
    key = 'licenseIssues';
  }
  else if (addCardHistory(props)) {
    key = 'cardHistory';
  }

  return key;
};

export const cardHistory = (props) => {
  let key = 'summary';
  if (addingDL(props)) {
    key = 'licenseIssues';
  }
  else if (!altFlow(props)) {
    key = 'nameHistory';
  }
  return key;
};