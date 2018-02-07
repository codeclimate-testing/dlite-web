'use strict';

export const licenseAndIdIssued = (props) => {
  return props.licenseAndIdHistory.isIssued === 'Yes';
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