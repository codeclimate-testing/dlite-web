'use strict';

import { hasExistingCard }    from '../../data/card-actions';
export const addWdywtdt = (props) => {
  let key = 'addLicenseClass';
  if (hasExistingCard(props)) {
    key = 'addCurrentCardInfo';
  }
  return key;
};

export const addMedicalHistory = (props) => {
  let key = 'addLicenseHistory';
  if (hasExistingCard(props)) {
    key = 'addIssueHistory';
  }
  return key;
};