'use strict';

export const eligibleForCitizen = (props) => {
  return props.citizenStatus === 'Yes';
}

export const eligibileForRequirements = (props) => {
  return props.eligibilityRequirements === 'Yes';
}

export const shouldContactMethods = (props) => {
  return props.contactMethods.shouldContact !== 'Yes';
}

export const eligibleForOptOut =  (props) => {
  return props.optOut === 'new';
}

export const eligibleForOptOutExist =  (props) => {
  return props.optOut === 'existing';
}
