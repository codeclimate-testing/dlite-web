'use strict';

import { hasValue } from './validations';
import {
  ageChecks,
  isPreregistering
} from '../calculate-age';
import { getDL } from './card-type';

export const validToContinue = (props) => {
  return props.cardType.youthIDInstead !== 'No' ||
    ageChecks.GreaterThanEqual15(props.dateOfBirth);
};

export const tooYoungForDL = (props) => {
  return ageChecks.Under15Half(props.dateOfBirth) &&
    getDL(props);
};

export const under16GuardianSignature = (props) => {
  return ageChecks.Under16(props.dateOfBirth);
};
export const checkPreReg = (dateOfBirth) => {
  return isPreregistering(dateOfBirth) ? 'voterPreRegistration' : 'voterRegistration';
};

export const continueHidden = (props) => {
  if (!validToContinue(props)) {
    return true;
  } else {
    return false;
  }
};

export const isNewDriver = (props) => {
  return ageChecks.Under18(props.dateOfBirth, props.now) && ageChecks.GreaterThanEqual15Half(props.dateOfBirth, props.now) && props.licenseIssued !== 'Yes';
};

export const needsKnowledgeTest = (props) => {
  return ageChecks.Under17Half(props.dateOfBirth, props.now);
};

export const guardianSigned = (props) => {
  return props.guardianSignature.isSigned === 'Yes';
};

export const guardianNotSigned = (props) => {
  return props.guardianSignature.isSigned === 'No';
};

export const guardianHasValue = (props) => {
  return hasValue(props.guardianSignature.isSigned);
};
