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