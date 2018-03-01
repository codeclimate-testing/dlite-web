'use strict';

import { hasValue }       from './validations';
import * as dataPresent   from '../data-present';

export const licenseAndIdIssued = (props) => {
  return props.licenseAndIdHistory.isIssued === 'Yes';
};

export const showIssuedIn = (props) => {
  return licenseAndIdIssued(props) && hasValue(props.licenseAndIdHistory.issuedBy);
};

export const showExpirationDate = (props) => {
  return licenseAndIdIssued(props) && dataPresent.date(props.licenseAndIdHistory);
};

export const cardNumber = (props) => {
  let key = 'None';
  if (licenseAndIdIssued(props)) {
    key = props.licenseAndIdHistory.DLIDNumber || props.licenseAndIdHistory.number
  }
  return key;
};

export const licenseIssuesIsSuspended = (props) => {
  return props.licenseIssues.isSuspended === 'Yes';
};

export const hasMedical = (props) => {
  return props.medicalHistory.hasMedicalCondition === 'Yes';
};

export const hasUsedPreviousNames = (props) => {
  return props.namesHistory.hasUsedPreviousNames === 'Yes';
};

export const getStringByMedical = (props) => {
  return hasMedical(props) ? props.medicalHistory.medicalInfo : 'None';
};

export const getStringByPreviousNames = (props) => {
  return hasUsedPreviousNames(props) ? props.namesHistory.previousNames : 'None';
};