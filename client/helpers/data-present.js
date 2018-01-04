'use strict';

import {
  hasValue,
  hasAnyAttributes,
  hasAllAttributes,
  includes
} from './data/validations';

// TODO: move to `data/validations`


const hasValues = (props) => {
  if (!props) { return; }

  return props.length > 0;
};
// --------------------------------

const legalName = (props) => {
  return hasAllAttributes(props, ['lastName']);
};

const date = (props) => {
  return hasAllAttributes(props, ['month', 'day', 'year']);
};

const cardType = (props) => {
  return (props && (hasValue(props.renew) || props.new.length > 0));
};

const currentCardInfo = (props) => {
  return date(props) && hasAllAttributes(props, ['number'])
};

const reducedFee = (props) => {
  return hasAllAttributes(props, ['ID']);
};

const licenseType = (props) => {
  return props && hasValues(props.type) && (props.needEndorsement === 'No' || hasValues(props.endorsement));
};

const address = (props) => {
  return hasAnyAttributes(props, ['street_1', 'street_2', 'city', 'zip']);
};

const homeAddressSameAsMailing = (props) => {
  return hasAllAttributes(props, ['homeAddressSameAsMailing']);
};

const traitsHeightWeight = (props) => {
  return hasAllAttributes(props, ['weight', 'heightFeet']);
};

const organDonation = (props) => {
  return hasAllAttributes(props, ['donateMoney', 'donateOrgan']);
};

const socialSecurity = (props) => {
  return hasAllAttributes(props, ['part1', 'part2', 'part3']) || (props && props.hasSocialSecurity === 'No');
};

const veteransService = (props) => {
  return props && (props.isVeteran === 'No' || hasAllAttributes(props, ['isVeteran', 'receiveBenefits', 'veteransIdentifier']));
};

const licenseIssues = (props) => {
  return props && (props.isSuspended === 'No' || date(props) || hasValue(props.reason));
};

const licenseAndIdHistory = (props) => {
  return props && (props.isIssued === 'No' || (date(props) || hasAnyAttributes(props, ['DLIDNumber', 'issuedBy'])));
};

const namesHistory = (props) => {
  return hasAllAttributes(props, ['hasUsedPreviousNames', 'previousNames']);
};

const hasPreviousNames = (props) => {
  return hasAllAttributes(props, ['hasUsedPreviousNames']);
};

const medicalHistory = (props) => {
  return hasAllAttributes(props, ['hasMedicalCondition', 'medicalInfo']);
};

const hasMedicalCondition = (props) => {
  return hasAllAttributes(props, ['hasMedicalCondition']);
};

const contactMethods = (props) => {
  return hasValue(props && props.shouldContact) &&
    hasAnyAttributes(props, ['emailAddress', 'phoneNumber']);
};

const politicalPartyChoose = (props) => {
    return props && (
    hasValue(props.politicalPartyChoose) && hasValue(props.isSelected)
  );
};

const physicalTraits = (props) => {
  return hasAllAttributes(props, ['sex', 'eyeColor', 'hairColor']);
};

const realID = (props) => {
  return hasAnyAttributes(props, ['getRealID']);
};


const guardianSignature = (props) => {
  let guardianInfoFirst = props.guardianInfo[0];
  return props && (props.isSigned === 'No' ||
    hasAllAttributes(guardianInfoFirst, [
      'acceptLiabilities',
      'signature',
      'signatureDateMonth',
      'signatureDateDay',
      'signatureDateYear',
      'phoneNumber',
      'street_1',
      'street_2',
      'city',
      'state',
      'zip',
      'IDNumber',
      'IDIssuedBy',
      'IDExpirationDateMonth',
      'IDExpirationDateDay',
      'IDExpirationDateYear'
  ]));
}

const application = (props) => {
  return legalName(props.legalName) ||
    date(props.dateOfBirth) ||
    cardType(props.cardType) ||
    currentCardInfo(props.currentCardInfo) ||
    reducedFee(props.reducedFee) ||
    licenseType(props.licenseType) ||
    address(props.homeAddress) ||
    address(props.mailingAddress) ||
    traitsHeightWeight(props.traitsHeightWeight) ||
    physicalTraits(props.physicalTraits) ||
    organDonation(props.organDonation) ||
    socialSecurity(props.socialSecurity) ||
    veteransService(props.veteransService) ||
    namesHistory(props.namesHistory) ||
    medicalHistory(props.medicalHistory) ||
    licenseIssues(props.licenseIssues) ||
    licenseAndIdHistory(props.licenseAndIdHistory) ||
    hasValue(props.citizenStatus) ||
    hasValue(props.ballotByMail) ||
    hasValue(props.eligibilityRequirements) ||
    politicalPartyChoose(props.politicalPartyChoose) ||
    hasValue(props.ballotLanguage) ||
    hasValue(props.optOut) ||
    contactMethods(props.contactMethods) ||
    realID(props.realID) ||
    guardianSignature(props.guardianSignature) ||
    hasValue(props.seniorID);
};

const value = hasValue; // remove when sure everything does not use this.

export {
  value,
  hasValues,
  includes,
  legalName,
  cardType,
  currentCardInfo,
  reducedFee,
  licenseType,
  address,
  date,
  traitsHeightWeight,
  physicalTraits,
  organDonation,
  socialSecurity,
  veteransService,
  namesHistory,
  hasMedicalCondition,
  medicalHistory,
  licenseIssues,
  licenseAndIdHistory,
  politicalPartyChoose,
  contactMethods,
  hasPreviousNames,
  homeAddressSameAsMailing,
  application,
  realID,
  guardianSignature
};
